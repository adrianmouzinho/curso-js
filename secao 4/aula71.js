// ESCOPO LÉXICO

const nome = 'Adrian'

function falaNome() {
  // const nome = 'Carla'
  console.log(nome)
}

function usaFalaNome() {
  const nome = 'Maria'
  falaNome()
}
usaFalaNome()