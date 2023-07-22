import decode from 'jwt-decode'

import { authActionTypes } from './actionsTypes'

const initialState = {
  isSignedIn: false,
  token: '',
  user: {},
  isLoading: false,
}

export function authReducer(state = initialState, action) {
  switch (action.type) {
    case authActionTypes.SIGNIN_SUCCESS:
      const token = action.payload.token
      const { user } = decode(token)

      const newState = {
        ...state,
        isSignedIn: true,
        token,
        user,
        isLoading: false,
      }

      return newState

    case authActionTypes.SIGNIN_FAILURE:
      return initialState

    default:
      return state
  }
}
