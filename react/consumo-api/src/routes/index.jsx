import { Route, Routes as Switch } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { SignUp } from '../pages/SignUp'
import { Student } from '../pages/Student'
import { Students } from '../pages/Students'
import { Images } from '../pages/Images'
import { NotFound } from '../pages/NotFound'
import { PrivateRoute } from './PrivateRoute'
import { CreateStudent } from '../pages/CreateStudent'
import { Profile } from '../pages/Profile'

export function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Students />} />
      <Route
        path="/students/:id/edit"
        element={
          <PrivateRoute>
            <Student />
          </PrivateRoute>
        }
      />
      <Route
        path="/students/:id/images"
        element={
          <PrivateRoute>
            <Images />
          </PrivateRoute>
        }
      />
      <Route
        path="/students/register"
        element={
          <PrivateRoute>
            <CreateStudent />
          </PrivateRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route path="/signIn" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="*" element={<NotFound />} />
    </Switch>
  )
}
