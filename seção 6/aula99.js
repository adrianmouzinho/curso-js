// POLIMORFISMO

// Superclass
function Conta(agencia, conta, saldo) {
  this.agencia = agencia
  this.conta = conta
  this.saldo = saldo
}

Conta.prototype.sacar = function(valor) {
  if(this.saldo < valor) {
    console.log(`saldo insuficiente: R$${this.saldo.toFixed(2)}`)
    return
  }

  this.saldo -= valor
  this.verSaldo()
}

Conta.prototype.depositar = function(valor) {
  this.saldo += valor
  this.verSaldo()
}

Conta.prototype.verSaldo = function() {
  console.log(`Ag/c: ${this.agencia}/${this.conta} | Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo)
  this.limite = limite
}
ContaCorrente.prototype = Object.create(Conta.prototype)
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor) {
  if(valor > this.saldo + this.limite) {
    console.log(`limite insuficiente, saldo: R$${this.saldo.toFixed(2)}`)
    return
  }

  this.saldo -= valor
  this.verSaldo()
}


const conta = new Conta(11, 875, 0)
// console.log(conta)
// conta.depositar(10)
// conta.depositar(100)
// conta.sacar(110)
// conta.sacar(0.001)

const contaCorrente = new ContaCorrente(12, 534, 10, 1000)
console.log(contaCorrente)
contaCorrente.depositar(10)
contaCorrente.sacar(20)
contaCorrente.sacar(1000)

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo)
}
ContaPoupanca.prototype = Object.create(Conta.prototype)
ContaPoupanca.prototype.constructor = ContaPoupanca

const contaPoupanca = new ContaPoupanca(13, 234, 0)
console.log(contaPoupanca)
contaPoupanca.depositar(10)
contaPoupanca.sacar(20)
contaPoupanca.sacar(1000)