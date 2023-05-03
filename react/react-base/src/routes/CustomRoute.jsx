import { Redirect, Route } from 'react-router-dom'

export function CustomRoute({ component, isPrivate, ...rest }) {
  const isSignedIn = false

  if (isPrivate && !isSignedIn) {
    return (
      <Redirect
        to={{ pathname: 'signIn', state: { prevPath: rest.location.pathname } }}
      />
    )
  }

  return <Route component={component} {...rest} />
}
