exports.paginaInicial = (req, res) => {
  return res.render('index', {
    titulo: 'meu titulo',
    numeros: [1,2,3,4,5,6,7,8,9],
  })
}

exports.trataPost = (req, res) => {
  return res.send(req.body)
}