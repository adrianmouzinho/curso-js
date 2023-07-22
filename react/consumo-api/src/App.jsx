import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ToastContainer } from 'react-toastify'

import { Header } from './components/Header'
import { Routes } from './routes'
import { GlobalStyles } from './styles/GlobalStyles'
import { persistor, store } from './redux/store'

export function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Header />
        <Routes />
        <GlobalStyles />
        <ToastContainer autoClose={3000} className="toastify-container" />
      </PersistGate>
    </Provider>
  )
}
