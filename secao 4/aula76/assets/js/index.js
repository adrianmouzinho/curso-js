function criaCalculadora() {
  return {
    display: document.querySelector('.display'),

    inicia() {
      this.clicarEnter()
      this.clicaBotoes()
    },

    clicarEnter() {
      document.addEventListener('keypress', e => {
        if(e.keyCode == 13) {
          this.calcular()
        }
      })
    },

    mostrarBtnDisplay(elemento) {
      this.display.value += elemento.innerText
      this.display.focus()
    },

    clearDisplay() {
      this.display.value = ''
      this.display.focus()
    },

    deletar() {
      this.display.value = this.display.value.slice(0, -1)
      this.display.focus()
    },

    calcular() {
      const resultado = this.display.value
      try {
        conta = eval(resultado)

        if(!conta) {
          alert('Conta inválida!')
          return;
        }
        this.display.value = conta

      } catch (error) {
        alert('Conta inválida!')
      }
    },

    clicaBotoes() {
      document.addEventListener('click', (e) => {
        const elemento = e.target

        if(elemento.classList.contains('btn-num')) {
          this.mostrarBtnDisplay(elemento)
        }
        
        if(elemento.classList.contains('btn-clear')) {
          this.clearDisplay()
        }
        
        if(elemento.classList.contains('btn-del')) {
          this.deletar()
        }
        
        if(elemento.classList.contains('btn-equal')) {
          this.calcular()
        }
      })
    },
  }
}

const calculadora = criaCalculadora()
calculadora.inicia()