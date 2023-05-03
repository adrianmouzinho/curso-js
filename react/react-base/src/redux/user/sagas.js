import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { clickButtonFailure, clickButtonSuccess } from './actions'
import { userActionTypes } from './actionsTypes'

function request() {
  return new Promise((resolve) => setTimeout(resolve, 600))
}

function* exampleRequest() {
  try {
    yield call(request)
    yield put(clickButtonSuccess())
  } catch {
    toast.error('Deu erro.')
    yield put(clickButtonFailure())
  }
}

export const userSagas = all([
  takeLatest(userActionTypes.BUTTON_CLICKED_REQUEST, exampleRequest),
])
