exports.middlewareGlobal = (req, res, next) => {
  if (req.body.cliente) {
    req.body.cliente = 'mudei esse valor'
    console.log(`Vi que vc postou ${req.body.cliente}`)
  }
  next()
}

exports.outroMiddleware = (req, res, next) => {
  console.log()
  console.log('Outro middleware')
  console.log()
  next()
}