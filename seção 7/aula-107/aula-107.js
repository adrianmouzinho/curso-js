class ValidaFormulario {
  constructor() {
    this.formulario = document.querySelector('.formulario');
    this.eventos();
  }

  eventos() {
    this.formulario.addEventListener('submit', (evento) => {
      this.handleSubmit(evento);
    })
  }
  
  handleSubmit(evento) {
    evento.preventDefault();
    const camposValidos = this.camposSaoValidos();
    const senhasValidas = this.senhasSaoValidas();

    if(camposValidos && senhasValidas) {
      alert('Formulário enviado');
      this.formulario.submit();
      
    }
  }

  senhasSaoValidas() {
    let valido = true;

    const senha = this.formulario.querySelector('.senha');
    const repetirSenha = this.formulario.querySelector('.repetir-senha');

    if(senha.value !== repetirSenha.value) {
      this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.')
      this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.')
      valido = false;
    }

    if(senha.value.length < 6 || senha.value.length > 12) {
      this.criaErro(senha, 'Senha precisa ter entre 6 e 12 caracteres.');
      valido = false;
    }

    return valido;
  }

  camposSaoValidos() {
    let valido = true;

    for(let erro of this.formulario.querySelectorAll('.erro')) {
      erro.remove();
    }

    for(let campo of this.formulario.querySelectorAll('.validar')) {
      const label = campo.previousElementSibling.innerText;

      if(!campo.value) {
        this.criaErro(campo, `Campo ${label} não pode estar vazio.`);
        valido = false;
      }

      if(campo.classList.contains('cpf')) {
        if(!this.validaCPF(campo)) valido = false;
      }

      if(campo.classList.contains('usuario')) {
        if(!this.validaUsuario(campo)) valido = false;
      }
    }
    return valido;
  }

  validaUsuario(campo) {
    const usuario = campo.value;
    let valido = true;

    if(usuario.length < 3 || usuario.length > 12) {
      this.criaErro(campo, `Usuário precisa ter entre 3 e 12 caracteres.`);
      valido = false;
    }

    if(!usuario.match(/^[a-zA-z0-9]+$/g)) {
      this.criaErro(campo, `Nome de usuário precisa conter apenas letras e/ou números.`);
      valido = false;
    }

    return valido;
  }

  validaCPF(campo) {
    const cpf = new ValidaCPF(campo.value);
    if(!cpf.valida()) {
      this.criaErro(campo, `CPF inválido.`);
      return false;
    }

    return true;
  }

  criaErro(campo, mensagem) {
    const div = document.createElement('div');
    div.innerHTML = mensagem;
    div.classList.add('erro');
    campo.insertAdjacentElement('afterend', div);
  }
}

const valida = new ValidaFormulario();