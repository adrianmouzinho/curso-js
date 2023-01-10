class Carro {
  constructor(nome) {
    this.nome = nome;
    this.velocidade = 0;
  }

  acelerar() {
    if(this.velocidade >= 100) return;
    this.velocidade++;
  }

  freiar() {
    if(this.velocidade <= 0) return;
    this.velocidade--;
  }
}

const c1 = new Carro('Onix');

console.log(c1);

for(let i = 0; i <= 200; i++) {
  c1.acelerar();
}

c1.velocidade = 1500;
console.log(c1);