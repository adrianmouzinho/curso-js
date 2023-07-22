import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import validator from 'validator'
import { toast } from 'react-toastify'
import dayjs from 'dayjs'
import { Image as ImageIcon } from '@phosphor-icons/react'

import { Input } from '../../components/Input'
import {
  Back,
  ButtonsContainer,
  Container,
  FileLabel,
  Form,
  InputsContainer,
} from './styles'
import { api } from '../../services/axios'
import { Loading } from '../../components/Loading'
import { MediaPicker } from '../../components/MediaPicker'

const initialState = {
  name: '',
  surname: '',
  email: '',
  age: '',
  height: '',
  weight: '',
}

export function CreateStudent() {
  const navigate = useNavigate()
  const [data, setData] = useState(initialState)
  const [isLoading, setIsLoading] = useState(false)

  function handleChange(event) {
    const { name, value } = event.target

    setData((prevState) => {
      const newState = { ...prevState, [name]: value }
      return newState
    })
  }

  async function handleRegisterStudent(event) {
    event.preventDefault()

    let errorsExist = false

    if (data.name.length < 3 || data.name.length > 255) {
      errorsExist = true
      toast.error('O nome precisa ter entre 3 e 255 caracteres!')
    }

    if (data.surname.length < 3 || data.surname.length > 255) {
      errorsExist = true
      toast.error('O sobrenome precisa ter entre 3 e 255 caracteres!')
    }

    if (!validator.isEmail(data.email)) {
      errorsExist = true
      toast.error('E-mail inválido!')
    }

    if (!data.age) {
      errorsExist = true
      toast.error('A data de nascimento é obrigatória!')
    }

    if (data.weight < 20000 || data.weight > 120000) {
      errorsExist = true
      toast.error('O peso precisa estar entre 20kg e 120kg!')
    }

    if (data.height < 100 || data.height > 2600) {
      errorsExist = true
      toast.error('A altura precisa estar entre 1.00m e 2.60m!')
    }

    const formData = new FormData(event.currentTarget)

    const fileToUpload = formData.get('avatarUrl')

    let avatarUrl = ''

    if (fileToUpload.name) {
      const uploadFormData = new FormData()
      uploadFormData.set('image', fileToUpload)

      const uploadResponse = await api.post('/upload', uploadFormData)

      avatarUrl = uploadResponse.data.fileUrl
    } else {
      errorsExist = true
      toast.error('Você precisa enviar uma foto do aluno!')
    }

    if (errorsExist) return

    setIsLoading(true)

    try {
      await api.post(`/students`, {
        ...data,
        weight: Number(data.weight),
        height: Number(data.height),
        avatarUrl,
        age: dayjs(data.age).toISOString(),
      })

      toast.success('Aluno cadastrado com sucesso!')

      setIsLoading(false)

      navigate('/')
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
      {isLoading ? (
        <Loading />
      ) : (
        <Form onSubmit={handleRegisterStudent}>
          <h1>Cadastrar aluno</h1>

          <InputsContainer>
            <fieldset>
              <legend>Informações pessoais</legend>

              <Input
                name="name"
                type="text"
                label="Nome"
                placeholder="Digite o nome do aluno"
                onChange={handleChange}
                value={data.name}
              />

              <Input
                name="surname"
                type="text"
                label="Sobrenome"
                placeholder="Digite o sobrenome do aluno"
                onChange={handleChange}
                value={data.surname}
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
                name="age"
                type="date"
                label="Date de nascimento"
                placeholder="Digite a data de nascimento do aluno"
                onChange={handleChange}
                value={data.age}
              />
            </fieldset>

            <fieldset>
              <legend>Medidas</legend>

              <Input
                name="height"
                type="number"
                label="Altura (cm)"
                placeholder="Digite a altura do aluno"
                onChange={handleChange}
                value={data.height}
              />

              <Input
                name="weight"
                type="number"
                label="Peso (g)"
                placeholder="Digite o peso do aluno"
                onChange={handleChange}
                value={data.weight}
              />

              <FileLabel htmlFor="media">
                <ImageIcon size={16} />
                Inserir imagem
              </FileLabel>

              <MediaPicker />
            </fieldset>
          </InputsContainer>

          <ButtonsContainer>
            <Back
              type="button"
              onClick={() => navigate('/')}
              disabled={isLoading}
            >
              Voltar
            </Back>

            <button type="submit" disabled={isLoading}>
              {!isLoading ? 'Confirmar cadastro' : 'Carregando...'}
            </button>
          </ButtonsContainer>
        </Form>
      )}
    </Container>
  )
}
