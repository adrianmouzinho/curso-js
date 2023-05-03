import styled from 'styled-components'
import * as colors from '../../config/colors'

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.gray50};
  border-bottom: 1px solid ${colors.gray100};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 0 2rem;

  strong {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.125rem;
    font-weight: 500;
    color: ${colors.gray800};

    svg {
      color: ${colors.blue500};
    }
  }

  > div {
    max-width: 1200px;
    width: 100%;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    color: ${colors.gray500};
    cursor: pointer;
    transition: all 300ms;
  }

  a:hover {
    background-color: ${colors.blue100};
    color: ${colors.blue500};
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 0;
    left: 0;
    transform: ${(props) =>
      props.isOpen ? 'translateX(4rem)' : 'translateX(-100%)'};
    width: 100%;
    flex-direction: column;
    align-items: center;
    background-color: ${colors.gray50};
    border-bottom: 1px solid ${colors.gray100};
  }
`

export const Logout = styled.nav`
  padding: 1rem;
  border-top: 1px solid ${colors.gray100};

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.875rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    color: ${colors.gray500};
    cursor: pointer;
    transition: all 300ms;
  }

  a:hover {
    background-color: ${colors.blue100};
    color: ${colors.blue500};
  }
`

export const MenuButon = styled.button`
  background-color: transparent;
  padding: 0;
  color: ${colors.gray800};
  visibility: hidden;
  display: none;

  &:hover {
    background-color: transparent;
  }

  @media (max-width: 768px) {
    visibility: visible;
    display: inline;
  }
`
