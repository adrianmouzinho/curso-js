import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'

import { signInFailure, signInSuccess } from './actions'
import { authActionTypes } from './actionsTypes'
import { api } from '../../services/axios'

function* signInRequest({ payload }) {
  try {
    const { email, password, prevPath } = payload

    const response = yield call(api.post, '/login', { email, password })

    yield put(signInSuccess({ ...response.data }))

    toast.success('Você fez login!')

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`

    window.location.href = prevPath
  } catch (error) {
    toast.error('Usuário ou senha inválidos!')
    yield put(signInFailure())
  }
}

function persistRehydrate({ payload }) {
  const token = payload?.authReducer?.token || ''

  if (!token) {
    return
  }

  api.defaults.headers.Authorization = `Bearer ${token}`
}

export const authSagas = all([
  takeLatest(authActionTypes.SIGNIN_REQUEST, signInRequest),
  takeLatest('persist/REHYDRATE', persistRehydrate),
])
