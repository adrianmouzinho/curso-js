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