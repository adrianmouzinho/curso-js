import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export function persist(reducers) {
  const persistedReducers = persistReducer(
    {
      key: 'REACT_BASE',
      storage,
      whitelist: ['userReducer'],
    },
    reducers,
  )

  return persistedReducers
}
