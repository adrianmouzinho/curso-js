import styled from 'styled-components'
import * as colors from '../../config/colors'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  overflow-x: hidden;

  img {
    width: 1.75rem;
    height: 1.75rem;
    clip-path: circle();
    object-fit: cover;
  }

  @media (max-width: 752px) {
    > div {
      overflow-x: scroll;
    }
  }
`

export const Table = styled.table`
  min-width: 752px;
  width: 100%;
  margin: 0 auto;
  background-color: ${colors.white};
  border: 1px solid ${colors.gray100};
  border-spacing: 0;
  border-radius: 0.5rem;

  text-align: left;
  color: ${colors.gray500};
  font-size: 0.875rem;

  th {
    font-weight: 600;
  }

  td {
    span {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
  }

  th,
  td {
    padding: 0.5rem 1rem;
  }

  tbody {
    td {
      border-top: 1px solid ${colors.gray100};
    }
  }
`

export const ButtonsContainer = styled.td`
  width: fit-content;
`

export const CloseButton = styled.button`
  background-color: transparent;
  padding: 0.25rem;

  svg {
    color: ${colors.red500};
  }

  &:hover {
    background-color: transparent;

    svg {
      color: ${colors.red600};
    }
  }
`

export const EditButton = styled(Link)`
  margin-right: 1rem;
  padding: 0.25rem;

  svg {
    color: ${colors.blue500};
  }

  &:hover {
    svg {
      color: ${colors.blue600};
    }
  }
`

export const Button = styled.button`
  display: block;
  margin-bottom: 16px;
  margin-left: auto;
`
