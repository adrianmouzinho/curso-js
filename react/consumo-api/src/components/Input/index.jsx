import { Container } from './styles'

export function Input({ name, type, label, ...rest }) {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <input {...rest} type={type} name={name} id={name} />
    </Container>
  )
}
