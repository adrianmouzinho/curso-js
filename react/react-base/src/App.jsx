import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import { Header } from './components/Header'
import { Routes } from './routes'
import { history } from './services/history'
import { GlobalStyles } from './styles/GlobalStyles'

export function App() {
  return (
    <Router history={history}>
      <Header />
      <Routes />
      <GlobalStyles />
      <ToastContainer autoClose={3000} className="toastify-container" />
    </Router>
  )
}
