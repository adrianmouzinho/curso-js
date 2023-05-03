import { Switch } from 'react-router-dom'

import { SignIn } from '../pages/SignIn'
import { NotFound } from '../pages/NotFound'
import { CustomRoute } from './CustomRoute'

export function Routes() {
  return (
    <Switch>
      <CustomRoute exact path="/" component={SignIn} />
      <CustomRoute path="*" component={NotFound} />
    </Switch>
  )
}
