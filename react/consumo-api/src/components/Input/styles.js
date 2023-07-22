import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  input {
    height: 40px;
    padding: 0 12px;
    border: none;
    border-radius: 4px;
    outline: 1px solid ${colors.gray200};
  }

  input:focus-visible {
    outline-color: ${colors.blue600};
  }

  input::placeholder {
    color: ${colors.gray500};
  }
`
