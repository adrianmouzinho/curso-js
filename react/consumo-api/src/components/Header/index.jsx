import { useState } from 'react'
import { GraduationCap, List, X } from '@phosphor-icons/react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  Link,
  Logout,
  MenuButton,
  NavContainer,
  SignIn,
  SignUp,
} from './styles'
import { signInFailure } from '../../redux/auth/actions'

export function Header() {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isSignedIn } = useSelector((state) => state.authReducer)

  const dispatch = useDispatch()

  function handleToggleMenu() {
    setIsMenuOpen((prevState) => !prevState)
  }

  function handleLogout() {
    dispatch(signInFailure())
    navigate('/signIn')
  }

  return (
    <Container>
      <div>
        <strong>
          <GraduationCap weight="bold" size={24} />
          Admin Panel
        </strong>

        <MenuButton onClick={handleToggleMenu} color={'red'}>
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </MenuButton>

        <NavContainer isMenuOpen={isMenuOpen}>
          {isSignedIn ? (
            <>
              <Link
                to="/profile"
                style={({ isActive }) =>
                  isActive ? { color: 'red' } : undefined
                }
              >
                Acessar perfil
              </Link>
              <Logout onClick={handleLogout}>Sair</Logout>
            </>
          ) : (
            <>
              <SignIn to="/signIn">Entrar</SignIn>
              <SignUp to="/signUp">Cadastrar</SignUp>
            </>
          )}
        </NavContainer>
      </div>
    </Container>
  )
}
