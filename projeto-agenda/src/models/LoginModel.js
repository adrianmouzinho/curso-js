const mongoose = require('mongoose')
const bcryptjs = require('bcryptjs')

const LoginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  senha: {
    type: String,
    required: true,
  },
})

const LoginModel = mongoose.model('Usuarios', LoginSchema)

class Login {
  constructor (usuario) {
    this.usuario = usuario
  }

  async encontrarUsuario() {
    const usuario = await LoginModel.findOne({
      email: this.usuario.email,
    })

    return usuario
  }

  async usuarioLogado() {
    const usuario = await this.encontrarUsuario()

    if (!usuario) {
      return null
    }

    const senhaValida = bcryptjs.compareSync(this.usuario.senha, usuario.senha)

    return senhaValida
  }

  async cadastrar() {
    const salt = bcryptjs.genSaltSync()
    const senhaHash = bcryptjs.hashSync(this.usuario.senha, salt)

    return await LoginModel.create({
      email: this.usuario.email,
      senha: senhaHash,
    })
  }
}

module.exports = Login