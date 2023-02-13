const fs = require('node:fs/promises')

module.exports = (caminho, dados) => {
  fs.writeFile(caminho, dados, { flag: 'w' })
}
