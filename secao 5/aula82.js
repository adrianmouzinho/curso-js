// MÉTODO SPLICE

const nomes = ['Adrian', 'Saymon', 'Lorenzo', 'Simone', 'Willame'];
// pop
// const removidos = nomes.splice(-1, 1);

// push
// const removidos = nomes.splice(nomes.length, 0, 'Vitor');

const removidos = nomes.splice(0, 0, 'Vitoria', 'Maik');

console.log(nomes, removidos);