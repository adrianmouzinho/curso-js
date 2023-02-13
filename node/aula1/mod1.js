const nome = 'Adrian'
const sobrenome = 'Mouzinho'

function falaNome() {
  return nome + ' ' + sobrenome
}

class Pessoa {
  constructor(nome) {
    this.nome = nome
  }
}

// module.exports.nome = nome
// module.exports.sobrenome = sobrenome
// module.exports.falaNome = falaNome

// exports.nome = nome
// exports.sobrenome = sobrenome
// exports.falaNome = falaNome
// exports.Pessoa = Pessoa
// this.qualquerCoisa = 'O que eu quiser exportar'

module.exports = {
  nome,
  sobrenome,
  Pessoa
}
