// FUNÃO GERADORA

function* geradora() {
  yield 'valor 1';
  yield 'valor 2';
  yield 'valor 3';
}

function* geradora2() {
  let valor;
  while (true) {
    yield valor;
    valor++;
  }
}

const g = geradora2();
for (let i =0; i<10; i++) {
  console.log(g.next())
}