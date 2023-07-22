import { authActionTypes } from './actionsTypes'

export function signInSuccess(payload) {
  return {
    type: authActionTypes.SIGNIN_SUCCESS,
    payload,
  }
}
export function signInFailure(payload) {
  return {
    type: authActionTypes.SIGNIN_FAILURE,
    payload,
  }
}
export function signInRequest(payload) {
  return {
    type: authActionTypes.SIGNIN_REQUEST,
    payload,
  }
}
