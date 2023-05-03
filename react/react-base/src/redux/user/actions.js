import { userActionTypes } from './actionsTypes'

export function count(payload) {
  return {
    type: userActionTypes.COUNT,
    payload,
  }
}

export function clickButtonSuccess(payload) {
  return {
    type: userActionTypes.BUTTON_CLICKED_SUCCESS,
    payload,
  }
}
export function clickButtonFailure(payload) {
  return {
    type: userActionTypes.BUTTON_CLICKED_FAILURE,
    payload,
  }
}
export function clickButtonRequest(payload) {
  return {
    type: userActionTypes.BUTTON_CLICKED_REQUEST,
    payload,
  }
}
