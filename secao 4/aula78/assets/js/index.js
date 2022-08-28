function Calculadora() {
  this.display = document.querySelector('.display');

  this.inicia = () => {
    clicaBotoes();
    clicarEnter();
  }

  adicionar = (elemento) => {
    this.display.value += elemento.innerText;
    this.display.focus();
  }

  deletar = () => {
    this.display.value = this.display.value.slice(0, -1);
  }

  limparDisplay = () => {
    this.display.value = ''
  }

  clicarEnter = () => {
    document.addEventListener('keypress', e => {
      if(e.keyCode == 13) {
        calcular();
      }
    });
  }

  calcular = () => {
    try {
      const calculo = eval(this.display.value);

      if(!calculo) {
        alert('Cálculo inválido!');
        return;
      }
      this.display.value = String(calculo);
      
    } catch (error) {
      alert('Cálculo inválido!');
    }
  }

  clicaBotoes = () => {
    document.addEventListener('click', e => {
      const elemento = e.target;

      if(elemento.classList.contains('btn-num')) {
        adicionar(elemento);
      }

      if(elemento.classList.contains('btn-del')) {
        deletar();
      }

      if(elemento.classList.contains('btn-clear')) {
        limparDisplay();
      }

      if(elemento.classList.contains('btn-equal')) {
        calcular();
      }
    });
  }
}

const calculadora = new Calculadora();
calculadora.inicia();