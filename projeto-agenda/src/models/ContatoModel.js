const mongoose = require('mongoose')

const ContatoSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  sobrenome: {
    type: String,
    required: false,
    default: '',
  },
  email: {
    type: String,
    required: false,
    default: '',
  },
  telefone: {
    type: String,
    required: false,
    default: '',
  },
  criado_em: {
    type: Date,
    default: Date.now,
  },
})

const ContatoModel = mongoose.model('Contato', ContatoSchema)

class Contato {
  constructor (body) {
    this.nome = body.nome
    this.sobrenome = body.sobrenome
    this.email = body.email
    this.telefone = body.telefone
  }

  static async buscarPorId(id) {
    const contato = await ContatoModel.findById(id)

    return contato
  }

  static async listar() {
    const contatos = await ContatoModel.find().sort({
      criado_em: -1,
    })

    return contatos
  }

  async cadastrar() {
    const contato = await ContatoModel.create({
      nome: this.nome,
      sobrenome: this.sobrenome,
      email: this.email,
      telefone: this.telefone,
    })

    return contato
  }

  async editar(id) {
    const contato = await ContatoModel.findByIdAndUpdate(id, {
      nome: this.nome,
      sobrenome: this.sobrenome,
      email: this.email,
      telefone: this.telefone,
    })

    return contato
  }

  static async deletar(id) {
    const contato = await ContatoModel.findByIdAndDelete(id)
    return contato
  }
}

module.exports = Contato