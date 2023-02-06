class ValidaCPF {
  constructor(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
      value: cpf.replace(/\D+/g, ''),
      enumerable: true,
      writable: false,
      configurable: false,
    })
  }

  eSequencia(cpf) {
    return cpf.charAt(0).repeat(cpf.length) === cpf;
  }

  geraDigito(cpfSemDigitos) {
    let total = 0;
    let reverso = cpfSemDigitos.length + 1;
    for(let char of cpfSemDigitos) {
      total += reverso * Number(char);
      reverso--;
    }

    const digito = 11 - (total % 11);
    return digito <= 9 ? String(digito) : '0' ;
  }

  novoCpf(cpf) {
    const cpfSemDigitos = cpf.slice(0, -2);
    const digito1 = this.geraDigito(cpfSemDigitos);
    const digito2 = this.geraDigito(cpfSemDigitos + digito1);

    return cpfSemDigitos + digito1 + digito2;
  }

  valida() {
    if(!this.cpfLimpo) return false;
    if(typeof this.cpfLimpo !== 'string') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.eSequencia(this.cpfLimpo)) return false;

    return this.novoCpf(this.cpfLimpo) === this.cpfLimpo;
  }
}
// 070.987.720-03
let validaCPF = new ValidaCPF('705.484.450-52');
// validaCPF = new ValidaCPF('777.777.777-77');
validaCPF = new ValidaCPF('070.987.720-03');

if(validaCPF.valida()) {
  console.log('CPF válido');
} else {
  console.log('CPF inválido');
}