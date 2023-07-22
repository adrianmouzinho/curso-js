import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
`

export const Form = styled.form`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray100};

  h1 {
    font-size: 20px;
    margin-bottom: 24px;
  }
`

export const InputsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  margin-bottom: 24px;

  fieldset {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
    border-radius: 4px;
    border: 1px solid ${colors.gray300};
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`

export const Back = styled.button`
  background-color: ${colors.red500};

  &:hover {
    background-color: ${colors.red600};
  }
`

export const FileLabel = styled.label`
  height: 40px;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0 12px;
  border: none;
  border-radius: 4px;
  background-color: ${colors.gray100};
  border: 1px solid ${colors.gray200};
  cursor: pointer;

  input {
    visibility: hidden;
    width: 0;
    height: 0;
  }
`
