const Contato = require('../models/ContatoModel')

exports.paginaInicial = async (req, res) => {
  if (!req.session.usuario) {
    return res.render('index')
  }

  const contatos = await Contato.listar()
  return res.render('meusContatos', { contatos })
}

exports.paginaSair = (req, res) => {
  req.session.destroy()
  return res.redirect('/')
}

exports.paginaBemVindo = (req, res) => {
  return res.render('bemVindo')
}