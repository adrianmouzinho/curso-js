import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { persistStore } from 'redux-persist'

import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'
import { persist } from './reduxPersist'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  persist(rootReducer),
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)
