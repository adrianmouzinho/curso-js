import { userActionTypes } from './actionsTypes'

const initialState = {
  count: 0,
  buttonClicked: false,
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case userActionTypes.COUNT:
      return { ...state, count: state.count + 1 }

    case userActionTypes.BUTTON_CLICKED_SUCCESS:
      console.log('Deu certo')
      return { ...state, buttonClicked: !state.buttonClicked }

    case userActionTypes.BUTTON_CLICKED_FAILURE:
      console.log('Deu erro')
      return state

    case userActionTypes.BUTTON_CLICKED_REQUEST:
      console.log('Estou fazendo a requisição')
      return state

    default:
      return state
  }
}
