// CLOSURES

function chamaFuncao(nome) {
  return () => {
    return nome
  }
}

const funcao = chamaFuncao('Adrian')
const funcao2 = chamaFuncao('Maria')
console.log(funcao(), funcao2())