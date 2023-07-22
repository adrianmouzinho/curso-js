import { createGlobalStyle } from 'styled-components'
import * as colors from '../config/colors'
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

  body {
    font-family: 'Inter', system-ui, sans-serif;
    height: 100vh;
    background-color: ${colors.gray50};
    font-size: 1rem;
  }

  button {
    cursor: pointer;
    border: none;
    color: ${colors.white};
    background-color: ${colors.blue500};
    border-radius: 0.25rem;
    padding: 0.5rem 1.5rem;
    font-size: 14px;
    font-weight: 700;
    transition: all 300ms;
  }

  button:hover {
    background-color: ${colors.blue600};
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.8;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  label {
    font-size: 14px;
  }

`
