exports.paginaInicial = (req, res) => {
  return res.render('index')
}

exports.trataPost = (req, res) => {
  return res.send(req.body)
}