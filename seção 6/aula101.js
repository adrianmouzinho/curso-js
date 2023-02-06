// OBJECT MAP()

// função set(chave, valor) -> adiciona uma chave no Map
// função get(chave) -> retorna o valor da chave informada
// função delete(chave) -> deleta a chave informada
// função clear() -> limpa o Map, remove todas as chaves

const pessoas = [
  { id: 3, nome: 'Adrian' },
  { id: 2, nome: 'Maria' },
  { id: 1, nome: 'Helena' },
]

// const novasPessoas = {}
// for(let { id, nome } of pessoas) {
//   novasPessoas[id] = { id, nome }
// }
// console.log(novasPessoas)

const novasPessoas = new Map()
for(let pessoa of pessoas) {
  let { id } = pessoa
  novasPessoas.set(id, { ...pessoa })
}
novasPessoas.delete(2)
console.log(novasPessoas)

// console.log(novasPessoas.get(1))

// for(let pessoa of novasPessoas) {
//   console.log(pessoa)
// }

// for(let valor of novasPessoas.keys()) {
//   console.log(valor)
// }

// for(let valor of novasPessoas.values()) {
//   console.log(valor)
// }