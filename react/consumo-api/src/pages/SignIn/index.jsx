import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import validator from 'validator'
import { toast } from 'react-toastify'
import { CaretLeft } from '@phosphor-icons/react'
import { useDispatch } from 'react-redux'

import { signInRequest } from '../../redux/auth/actions'
import { Input } from '../../components/Input'
import { BackToHome, Container, Form, InputsContainer, SignUp } from './styles'

export function SignIn() {
  const [data, setData] = useState({
    email: '',
    password: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation()

  function handleChange(event) {
    const { name, value } = event.target

    setData((prevState) => {
      const newState = { ...prevState, [name]: value }
      return newState
    })
  }

  function handleSubmit(event) {
    event.preventDefault()

    let errorsExist = false

    const { email, password } = data

    if (!validator.isEmail(email)) {
      errorsExist = true
      toast.error('E-mail inválido!')
    }

    if (password.length < 6 || password.length > 255) {
      errorsExist = true
      toast.error('A senha precisa de no mínimo 6 caracteres!')
    }

    if (errorsExist) return

    setIsLoading(true)

    dispatch(
      signInRequest({
        email,
        password,
        prevPath: location.state?.from?.pathname ?? '/',
      }),
    )

    setIsLoading(false)
  }

  return (
    <Container>
      <Form>
        <h1>Faça login para entrar na plataforma</h1>

        <InputsContainer>
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
          {!isLoading ? 'Entrar' : 'Carregando...'}
        </button>

        <SignUp onClick={() => navigate('/signUp')}>
          Ainda não possui uma conta? <span>Cadastre-se</span>.
        </SignUp>

        <BackToHome onClick={() => navigate('/')}>
          <CaretLeft />
          Voltar para página inicial
        </BackToHome>
      </Form>
    </Container>
  )
}
