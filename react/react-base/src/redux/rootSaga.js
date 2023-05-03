import { all } from 'redux-saga/effects'

import { userSagas } from './user/sagas'

export function* rootSaga() {
  return yield all([userSagas])
}
