import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray50};
  color: ${colors.gray800};
  text-align: center;

  h1 {
    font-size: 2rem;
    font-weight: 700;
  }

  a {
    color: ${colors.blue600};
    text-decoration: underline;
  }
`
