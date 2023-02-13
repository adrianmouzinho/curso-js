exports.paginaInicial = (req, res) => {
  console.log(req.flash('info'), req.flash('error'), req.flash('success'))
  return res.render('index')
}

exports.trataPost = (req, res) => {
  return res.send(req.body)
}