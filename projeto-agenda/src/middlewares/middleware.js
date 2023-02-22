exports.middlewareGlobal = (req, res, next) => {
  res.locals.erros = req.flash('erros')
  res.locals.sucesso = req.flash('sucesso')
  res.locals.usuario = req.session.usuario

  next()
}

exports.outroMiddleware = (req, res, next) => {
  console.log()
  console.log('Outro middleware')
  console.log()
  next()
}

exports.checkCsrfError = (err, req, res, next) => {
  if (err && err.code === 'EBADCSRFTOKEN') {
    return res.render('404')
  }

  next()
}

exports.csrfMiddleware = (req, res, next) => {
  res.locals.csrfToken = req.csrfToken()
  next()
}

exports.loginRequired = (req, res, next) => {
  if (!req.session.usuario) {
    req.flash('erros', 'Você precisa fazer login.')
    return req.session.save(() => {
      return res.redirect('/')
    })
  }

  next()
}