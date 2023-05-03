import { useDispatch, useSelector } from 'react-redux'

import { Container, Header } from './styles'
import {
  clickButtonRequest,
  count as countAction,
} from '../../redux/user/actions'

export function SignIn() {
  const { count } = useSelector((rootReducer) => rootReducer.userReducer)
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(countAction())
    dispatch(clickButtonRequest())
  }
  return (
    <Container>
      <Header>
        <button onClick={handleClick}>{count} clicar</button>
      </Header>
    </Container>
  )
}
