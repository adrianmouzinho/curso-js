// DECLARAÇÃO DE UMA FUNÇÃO

falaOi()
function falaOi() {
  console.log('oi')
}

const souUmDado = function() {
  console.log('sou um dado')
}
souUmDado()

const funcaoArrow = () => {
  console.log('sou uma arrow function')
}
funcaoArrow();

const objeto = {
  fala: function() {
    console.log('fala algo...')
  }
}
objeto.fala()