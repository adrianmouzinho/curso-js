// EXERCÍCIO - VALIDANDO CPF

function ValidaCPF(cpf) {
  Object.defineProperty(this, 'cpfLimpo', {
    get: function() {
      return cpf.replace(/\D+/g, '')
    }
  })
}

ValidaCPF.prototype.validar = function() {
  if(typeof this.cpfLimpo === 'undefined' || this.cpfLimpo.length !== 11 || this.isSequencia()) return false

  const cpfParcial = this.cpfLimpo.slice(0, -2)
  const digito1 = this.criaDigito(cpfParcial)
  const digito2 = this.criaDigito(cpfParcial + digito1)
  
  const novoCPF = cpfParcial + digito1 + digito2

  return this.cpfLimpo === novoCPF
}

ValidaCPF.prototype.criaDigito = function(cpfParcial) {
  const cpfArray = Array.from(cpfParcial)
  let regressivo = cpfArray.length + 1

  const total = cpfArray.reduce((ac, valor) => {
    ac += (Number(valor) * regressivo)
    regressivo--
    return ac
  }, 0)
  const digito = 11 - (total % 11)

  return digito > 9 ? '0' : String(digito)
}

ValidaCPF.prototype.isSequencia = function() {
  return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo
}

const cpf = new ValidaCPF('705.484.450-52')
const cpf2 = new ValidaCPF('111.111.111-11')
console.log(cpf.validar())
console.log(cpf2.validar())