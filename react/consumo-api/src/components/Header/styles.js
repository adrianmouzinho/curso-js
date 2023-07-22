import styled from 'styled-components'
import * as colors from '../../config/colors'
import { NavLink } from 'react-router-dom'

export const Container = styled.header`
  width: 100%;
  background-color: ${colors.gray50};
  border-bottom: 1px solid ${colors.gray100};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 0 1.25rem;
  position: relative;

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
  gap: 8px;

  @media (max-width: 768px) {
    display: ${(props) => (props.isMenuOpen ? 'block' : 'none')};
    position: ${(props) => props.isMenuOpen && 'absolute'};
    top: ${(props) => props.isMenuOpen && '100%'};
    left: ${(props) => props.isMenuOpen && '0px'};
    width: 100%;
    padding: 16px;
    background-color: ${colors.gray50};
    border-bottom: 1px solid ${colors.gray100};
  }
`

export const MenuButton = styled.button`
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
    display: block;
  }
`
export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-size: 0.875rem;
  padding: 0.5rem;
  color: ${colors.gray500};
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    color: ${colors.blue500};
  }

  &.active {
    color: ${colors.blue600};
    font-weight: 600;
  }
`

export const SignIn = styled(NavLink)`
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  color: ${colors.blue500};
  border: 1px solid ${colors.blue500};
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    color: ${colors.blue600};
    border: 1px solid ${colors.blue600};
  }
`

export const SignUp = styled(NavLink)`
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  background-color: ${colors.blue500};
  color: ${colors.white};
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    background-color: ${colors.blue600};
  }
`

export const Logout = styled.button`
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  font-weight: 600;
  color: ${colors.red500};
  background-color: transparent;
  border: 1px solid ${colors.red500};
  border-radius: 4px;
  cursor: pointer;
  transition: all 300ms;

  &:hover {
    color: ${colors.red600};
    border: 1px solid ${colors.red600};
    background-color: transparent;
  }

  @media (max-width: 768px) {
    display: block;
    margin: 16px auto 0;
  }
`
