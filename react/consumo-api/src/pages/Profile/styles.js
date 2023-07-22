import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Form = styled.form`
  max-width: 350px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray100};

  h1 {
    font-size: 20px;
    margin-bottom: 24px;
  }

  button {
    width: 100%;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const Back = styled.button`
  background-color: ${colors.red500};

  &:hover {
    background-color: ${colors.red600};
  }
`
