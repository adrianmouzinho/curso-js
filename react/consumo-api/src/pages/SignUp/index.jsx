import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import { toast } from 'react-toastify'
import { CaretLeft } from '@phosphor-icons/react'

import { Input } from '../../components/Input'
import { BackToHome, Container, Form, InputsContainer, SignIn } from './styles'
import { api } from '../../services/axios'

export function SignUp() {
  const navigate = useNavigate()
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target
    setData((prevState) => {
      const newState = { ...prevState, [name]: value }
      return newState
    })
  }

  async function handleSubmit(event) {
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
      await api.post('/users', data)

      toast.success('Conta criada com sucesso!')

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
        <h1>Faça o cadastro de sua conta agora mesmo</h1>

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

        <button type="submit" onClick={handleSubmit} disabled={isLoading}>
          {!isLoading ? 'Criar conta' : 'Carregando...'}
        </button>

        <SignIn onClick={() => navigate('/signIn')}>
          Já possui uma conta? <span>Entrar agora</span>.
        </SignIn>

        <BackToHome onClick={() => navigate('/')}>
          <CaretLeft />
          Voltar para página inicial
        </BackToHome>
      </Form>
    </Container>
  )
}
