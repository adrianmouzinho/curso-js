import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

export function persist(reducers) {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMO_API',
      storage,
      whitelist: ['authReducer'],
    },
    reducers,
  )

  return persistedReducers
}
