import { Container } from './styles'

export function NotFound() {
  return (
    <Container>
      <div>
        <h1>Página não encontrada</h1>
        <span>
          Essa página não existe, <a href="/">voltar para a página inicial</a>
        </span>
      </div>
    </Container>
  )
}
