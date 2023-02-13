const fs = require('node:fs/promises')
const path = require('node:path')

async function walk(files, rootDir) {
  for(let file of files) {
    const filePath = path.resolve(rootDir, file)
    const stats = await fs.stat(filePath)

    if (/\.git/g.test(filePath)) continue
    
    if (stats.isDirectory()) {
      readdir(filePath)
      continue
    }

    if (!/\.html/g.test(filePath)) continue

    console.log(filePath)
  }
}

async function readdir(rootDir) {
  rootDir = rootDir || path.resolve(__dirname)
  const files = await fs.readdir(rootDir)
  walk(files, rootDir)
}

readdir('C:/Users/adria/Documents/programação/javascript/udemy/')