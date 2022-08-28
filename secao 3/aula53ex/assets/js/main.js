const container = document.querySelector('.container');
const div = document.createElement('div');

const array = [
  {tag: 'h1', text: 'Cabeçalho principal'},
  {tag: 'p', text: 'Paragráfo'},
  {tag: 'a', text: 'Link'},
  {tag: 'button', text: 'Butão'}
];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);

  const { tag, text } = array[i];
  const createdTag = document.createElement(tag);
  const createdText = document.createTextNode(text);
  createdTag.appendChild(createdText);
  div.appendChild(createdTag);
}

container.appendChild(div);
