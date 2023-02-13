const fs = require('node:fs/promises')

module.exports = (caminho) => {
  return fs.readFile(caminho, 'utf8')
}