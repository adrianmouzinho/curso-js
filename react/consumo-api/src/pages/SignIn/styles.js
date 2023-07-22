import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray50};
`
export const Form = styled.form`
  max-width: 350px;
  width: 100%;
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
    margin-bottom: 16px;
  }
`

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
`

export const SignUp = styled.p`
  text-align: center;
  font-size: 14px;

  span {
    color: ${colors.blue600};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const BackToHome = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  margin-top: 32px;
`
