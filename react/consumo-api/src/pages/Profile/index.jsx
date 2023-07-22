import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'
import jwtDecode from 'jwt-decode'

import { Input } from '../../components/Input'
import {
  Back,
  ButtonsContainer,
  Container,
  Form,
  InputsContainer,
} from './styles'
import { api } from '../../services/axios'

export function Profile() {
  const { token } = useSelector((state) => state.authReducer)
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  async function getData() {
    try {
      const { user } = jwtDecode(token)

      const userResponse = await api.get(`/users/${user.id}`)

      const { name, email } = userResponse.data

      setData((prev) => {
        return {
          ...prev,
          name,
          email,
        }
      })
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  function handleChange(event) {
    const { name, value } = event.target
    setData((prevState) => {
      const newState = { ...prevState, [name]: value }
      return newState
    })
  }

  async function handleEditProfile(event) {
    event.preventDefault()

    let errorsExist = false

    if (data.name.length < 3 || data.name.length > 255) {
      errorsExist = true
      toast.error('O campo nome precisa ter entre 3 e 255 caracteres!')
    }

    if (!validator.isEmail(data.email)) {
      errorsExist = true
      toast.error('E-mail inválido!')
    }

    if (data.password.length < 6 || data.password.length > 10) {
      errorsExist = true
      toast.error('O campo senha precisa ter entre 6 e 10 caracteres!')
    }

    if (errorsExist) return

    setIsLoading(true)

    try {
      await api.put('/users', data)

      toast.success('Perfil editado com sucesso! Faça login agora')

      setIsLoading(false)

      navigate('/signIn')
    } catch (error) {
      setIsLoading(false)

      const { errors } = error.response.data
      if (errors) {
        errors.map((error) => toast.error(error))
      }
    }
  }

  return (
    <Container>
      <Form>
        <h1>Minhas informações</h1>

        <InputsContainer>
          <Input
            name="name"
            type="text"
            label="Nome"
            placeholder="John Doe"
            onChange={handleChange}
            value={data.name}
          />
          <Input
            name="email"
            type="email"
            label="E-mail"
            placeholder="johndoe@example.com"
            onChange={handleChange}
            value={data.email}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            placeholder="Informe sua senha"
            onChange={handleChange}
            value={data.password}
          />
        </InputsContainer>

        <ButtonsContainer>
          <Back type="button" onClick={() => navigate('/')}>
            Voltar
          </Back>

          <button
            type="submit"
            onClick={handleEditProfile}
            disabled={isLoading}
          >
            {!isLoading ? 'Editar perfil' : 'Carregando...'}
          </button>
        </ButtonsContainer>
      </Form>
    </Container>
  )
}
