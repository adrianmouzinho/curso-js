// FUNÇÃO RECURSIVA

function recursiva(min) {
  console.log(min)
  if(min >= 10) return;
  min++;
  recursiva(min);
}

recursiva(-10);