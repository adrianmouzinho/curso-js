class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
  }

  // Método de intância
  aumentarVolume() {
    console.log(this);
    this.volume += 2;
  }
  
  // Método de intância
  diminourrVolume() {
    this.volume -= 2;
  }

  // Método estático
  static trocarPilha() {
    console.log('OK, vou trocar as pilhas');
  }
  
  // Método estático
  static soma(x, y) {
    return this;
  }
}

const controle = new ControleRemoto('aiwa');
controle.aumentarVolume();
controle.aumentarVolume();
controle.aumentarVolume();
ControleRemoto.trocarPilha();
console.log(controle);

console.log(ControleRemoto.soma());