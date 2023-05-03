import {
  GraduationCap,
  House,
  SignOut,
  User,
  List,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { Container, MenuButon, NavContainer } from './styles'
import { useSelector } from 'react-redux'

export function Header() {
  // const [students, setStudents] = useState([])
  const { buttonClicked } = useSelector(
    (rootReducer) => rootReducer.userReducer,
  )

  function handleToggleMenu(event) {
    console.log(event.target)
  }

  return (
    <Container>
      <div>
        <strong>
          <GraduationCap weight="bold" size={24} />
          School Platform
        </strong>

        <MenuButon onClick={handleToggleMenu} color={'red'} isOpen={true}>
          <List size={24} />
        </MenuButon>

        <NavContainer>
          <Link to="/">
            <House size={18} />
            Início
          </Link>
          <Link to="/students">
            <User size={18} />
            Alunos
          </Link>
          <Link to="/logout">
            <SignOut size={18} />
            {buttonClicked ? 'Sair' : 'Entrar'}
          </Link>
        </NavContainer>
      </div>

      {/* <Logout></Logout> */}
    </Container>
  )
}
