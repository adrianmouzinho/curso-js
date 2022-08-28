const text = document.querySelector('.container h1');

const date = new Date();

const options = {
  dateStyle: 'full',
  //timeStyle: 'short'
};

const formattedDate = date.toLocaleDateString('pt-BR', options);

text.innerHTML = formattedDate;