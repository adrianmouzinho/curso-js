// FUNÇÕES DE CALLBACK

function randon(min = 2000, max = 4000) {
  const numero = Math.random() * (max - min) + min
  return Math.floor(numero)
}

function f1(callback) {
  setTimeout(() => {
    console.log('f1')

    if(callback) callback()
  }, randon())
}
function f2(callback) {
  setTimeout(() => {
    console.log('f2')

    if(callback) callback()
  }, randon())
}
function f3(callback) {
  setTimeout(() => {
    console.log('f3')

    if(callback) callback()
  }, randon())
}

// f1(()=>{
//   f2(()=>{
//     f3(()=>{
//       console.log('hello world')

//     })
//   })
// })

f1(f1Callback)
function f1Callback() {
  f2(f2Callback)
}
function f2Callback() {
  f3(f3Callback)
}
function f3Callback() {
  console.log('Ola mundo')
}
