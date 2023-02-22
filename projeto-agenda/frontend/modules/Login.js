const validator = require('validator')

export default class Login {
  constructor(formClass) {
    this.form = document.querySelector(formClass)
  }

  init() {
    this.events()
  }

  events() {
    if (!this.form) {
      return
    }

    this.form.addEventListener('submit', (event) => {
      event.preventDefault()
      if (!this.validate(event)) {
        return
      }
      
      event.target.submit()
    })
  }
  
  validate(event) {
    const element = event.target
    const emailInput = element.querySelector('input[name="email"]')
    const senhaInput = element.querySelector('input[name="senha"]')
    const existeErro = element.querySelector('div.erro')
    const existeSucesso = element.querySelector('div.sucesso')

    if (!!existeErro) {
      existeErro.remove()
    }

    if (!!existeSucesso) {
      existeSucesso.remove()
    }
    
    const erros = []
    
    if (!validator.isEmail(emailInput.value)) {
      erros.push('E-mail inválido.')
    }
    
    if (senhaInput.value.length < 3 || senhaInput.value.length > 50) {
      erros.push('Senha precisa ter entre 3 e 50 caracteres.')
    }
    
    if (erros.length > 0) {
      const divErro = document.createElement('div')
      const p = element.querySelector('p')
      divErro.classList.add('erro')

      erros.forEach((erro) => {
        divErro.innerHTML += `${erro}<br>`
      })

      p.insertAdjacentElement('afterend',divErro)
      return false
    }

    return true
  }
}