exports.middlewareGlobal = (req, res, next) => {
  res.locals.variavelLocal = 'este é o valor da variável local'
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