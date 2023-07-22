import { Navigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

export function PrivateRoute({ children }) {
  const { isSignedIn } = useSelector((state) => state.authReducer)
  const location = useLocation()

  if (!isSignedIn) {
    return <Navigate to="/signIn" state={{ from: location }} replace />
  }

  return children
}
