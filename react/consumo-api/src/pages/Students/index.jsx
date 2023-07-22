import { useEffect, useState } from 'react'
import { Pencil, Trash, UserCircle } from '@phosphor-icons/react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/axios'
import {
  ButtonsContainer,
  CloseButton,
  Container,
  EditButton,
  Table,
  Button,
} from './styles'
import { Loading } from '../../components/Loading'
import { getAgeByBirthDate } from '../../utils/getAgeByBirthDate'
import { toast } from 'react-toastify'

export function Students() {
  const navigate = useNavigate()
  const [students, setStudents] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  async function getData() {
    try {
      setIsLoading(true)

      const response = await api.get('/students')

      setStudents(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  async function handleDeleteStudent(id) {
    try {
      setIsLoading(true)

      await api.delete(`/students/${id}`)

      setStudents((prev) => prev.filter((student) => student.id !== id))

      toast.success('Aluno excluído com sucesso!')
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Container>
      <Button onClick={() => navigate('/students/register')}>
        Cadastrar aluno
      </Button>

      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <Table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>E-mail</th>
                <th>Idade</th>
                <th>Altura (m)</th>
                <th>Peso (kg)</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>
                    <span>
                      {!student.avatarUrl ? (
                        <UserCircle size={32} weight="fill" />
                      ) : (
                        <img
                          crossOrigin="anonymous"
                          src={student.avatarUrl}
                          alt="Foto do estudante"
                        />
                      )}
                      {student.name}
                    </span>
                  </td>
                  <td>{student.surname}</td>
                  <td>{student.email}</td>
                  <td>{getAgeByBirthDate(student.age)}</td>
                  <td>{(student.height / 100).toFixed(2)}</td>
                  <td>{(student.weight / 1000).toFixed(2)}</td>
                  <ButtonsContainer>
                    <EditButton to={`/students/${student.id}/edit`}>
                      <Pencil size={16} />
                    </EditButton>
                    <CloseButton
                      onClick={() => handleDeleteStudent(student.id)}
                    >
                      <Trash size={16} />
                    </CloseButton>
                  </ButtonsContainer>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  )
}
