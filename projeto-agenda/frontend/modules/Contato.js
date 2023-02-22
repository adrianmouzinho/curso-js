const validator = require('validator')

export default class Contato {
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
    const nomeInput = element.querySelector('input[name="nome"]')
    const telefoneInput = element.querySelector('input[name="telefone"]')
    const existeErro = element.querySelector('div.erro')
    const existeSucesso = element.querySelector('div.sucesso')

    if (!!existeErro) {
      existeErro.remove()
    }

    if (!!existeSucesso) {
      existeSucesso.remove()
    }
    
    const erros = []

    if (!nomeInput.value) {
      erros.push('Campo nome é obrigatório.')
    }
    
    if (emailInput.value && !validator.isEmail(emailInput.value)) {
      erros.push('E-mail inválido.')
    }
    
    if (!emailInput.value && !telefoneInput.value) {
      erros.push('Você precisa preencher pelo menos um desses campos: e-mail ou telefone.')
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
