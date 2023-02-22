const Login = require('../models/LoginModel')
const validator = require('validator')

exports.paginaLogin = (req, res) => {
  if (req.session.usuario) {
    return res.redirect('/bem-vindo')
  }

  return res.render('login')
}

exports.paginaCadastro = (req, res) => {
  if (req.session.usuario) {
    return res.redirect('/')
  }

  return res.render('register')
}

exports.cadastrarUsuario = async (req, res) => {
  const erros = []
  const usuario = {
    email: req.body.email,
    senha: req.body.senha,
  }

  if (!validator.isEmail(usuario.email)) {
    erros.push('E-mail inválido')
  }

  if (usuario.senha.length < 3 || usuario.senha.length > 50) {
    erros.push('Senha precisa ter entre 3 e 50 caracteres.')
  }

  if (erros.length > 0) {
    req.flash('erros', erros)
    return req.session.save(() => {
      return res.redirect('/register')
    })
  }

  try {
    const login = new Login(usuario)

    const usuarioExiste = await login.encontrarUsuario()

    if (usuarioExiste) {
      erros.push('Usuário já existe.')
    }

    if (erros.length > 0) {
      req.flash('erros', erros)
      return req.session.save(() => {
        return res.redirect('/register')
      })
    }

    await login.cadastrar()

    req.flash('sucesso', 'Cadastro realizado com sucesso! Agora faça seu login.')
    return req.session.save(() => {
      return res.redirect('/login')
    })
  } catch (error) {
    console.log(error)
    return res.render('404')
  }
}

exports.logarUsuario = async (req, res) => {
  const erros = []
  const usuario = {
    email: req.body.email,
    senha: req.body.senha,
  }

  if (!validator.isEmail(usuario.email)) {
    erros.push('E-mail inválido.')
  }

  if (usuario.senha.length < 3 || usuario.senha.length > 50) {
    erros.push('Senha precisa ter entre 3 e 50 caracteres.')
  }

  if (erros.length > 0) {
    req.flash('erros', erros)
    return req.session.save(() => {
      return res.redirect('login')
    })
  }

  try {
    const login = new Login(usuario)

    const usuarioExiste = await login.encontrarUsuario()

    if (!usuarioExiste) {
      erros.push('Usuário não existe.')
    }

    if (erros.length > 0) {
      req.flash('erros', erros)
      return req.session.save(() => {
        return res.redirect('login')
      })
    }

    const usuarioValido = await login.usuarioLogado()

    if (!usuarioValido) {
      erros.push('Senha inválida.')
    }

    if (erros.length > 0) {
      req.flash('erros', erros)
      return req.session.save(() => {
        return res.redirect('login')
      })
    }

    req.flash('sucesso', 'Você entrou no sistema.')
    req.session.usuario = {
      email: usuario.email
    }
    req.session.save(() => {
      return res.redirect('/bem-vindo')
    })
  } catch (error) {
    console.log(erros)
    return res.render('404')
  }
}