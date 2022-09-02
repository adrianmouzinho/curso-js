// OBJECT MAP()

const pessoas = [
  { id: 3, nome: 'Adrian' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' },
]

// const novasPessoas = {}

// for(let { id, nome } of pessoas) {
//   novasPessoas[id] = nome
// }

const novasPessoas = new Map()

for(let pessoa of pessoas) {
  const { id } = pessoa
  novasPessoas.set(id, { ...pessoa })
}

for(let [ id, nome ] of novasPessoas) {
  console.log(id, nome)
}

console.log(novasPessoas)