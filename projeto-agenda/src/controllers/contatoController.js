const validator = require('validator')
const Contato = require('../models/ContatoModel')

exports.paginaCadastrarContato = (req, res) => {
  return res.render('criarContato')
}

exports.cadastrarContato = async (req, res) => {
  const erros = []
  const contato = {
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    email: req.body.email,
    telefone: req.body.telefone,
  }

  if (!contato.nome) {
    erros.push('Campo nome é obrigatório.')
  }

  if (contato.email && !validator.isEmail(contato.email)) {
    erros.push('E-mail inválido.')
  }

  if (!contato.email && !contato.telefone) {
    erros.push('Você precisa preencher pelo menos um desses campos: e-mail ou telefone.')
  }

  if (erros.length > 0) {
    req.flash('erros', erros)
    return req.session.save(() => {
      return res.redirect('/contatos/register')
    })
  }

  try {
    const contatoModel = new Contato(contato)

    const contatoCriado = await contatoModel.cadastrar()

    req.flash('sucesso', 'Contato cadastrado com sucesso!')
    return req.session.save(() => {
      return res.redirect('/')
    })
  } catch (error) {
    console.log(error)
    return res.render('404')
  }
}

exports.paginaEditarContato = async (req, res) => {
  if (!req.params.id) {
    return res.render('404')
  }

  const id = req.params.id
  
  if (typeof id !== 'string') return

  try {
    const contato = await Contato.buscarPorId(id)

    if (!contato) {
      return res.render('404')
    }

    return res.render('editarContato', { contato })
  } catch (error) {
    console.log(error)
    return res.render('404')
  }
}

exports.editarContato = async (req, res) => {
  const erros = []
  const contato = {
    nome: req.body.nome,
    sobrenome: req.body.sobrenome,
    email: req.body.email,
    telefone: req.body.telefone,
  }

  if (!contato.nome) {
    erros.push('Campo nome é obrigatório.')
  }

  if (contato.email && !validator.isEmail(contato.email)) {
    erros.push('E-mail inválido.')
  }

  if (!contato.email && !contato.telefone) {
    erros.push('Você precisa preencher pelo menos um desses campos: e-mail ou telefone.')
  }

  const id = req.body.id

  if (erros.length > 0) {
    req.flash('erros', erros)
    return req.session.save(() => {
      return res.redirect(`/contatos/edit/${id}`)
    })
  }

  if (typeof id !== 'string') return

  try {
    const contatoModel = new Contato(contato)
    const contatoEditado = await contatoModel.editar(id)

    if (!contatoEditado) {
      return res.render('404')
    }

    req.flash('sucesso', 'Contato editado com sucesso!')
    req.session.save(() => {
      return res.redirect('/')
    })
  } catch (error) {
    console.log(error)
    return res.render('404')
  }
}

exports.excluirContato = async (req, res) => {
  const id = req.params.id

  if (!id || typeof id !== 'string') {
    return res.render('404')
  }

  try {
    const contato = await Contato.deletar(id)

    if (!contato) {
      return res.render('404')
    }
  
    req.flash('sucesso', 'Contato excluído com sucesso!')
    req.session.save(() => {
      return res.redirect('/')
    })
  } catch (error) {
    console.log(error)
    return res.render('404')
  }
}