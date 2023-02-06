"use strict";

function imgLoad(url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'blob';

    request.onload = () => {
      if (request.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(`Image didn't load successfully; error code: ${request.statusText}`));
      }
    }

    request.onerror = () => {
      reject(Error('There was a network error.'));
    }

    request.send();
  });
}

const body = document.querySelector('body');
const myImage = new Image();
myImage.alt = 'Cat image';

imgLoad('myImage.jpg')
  .then(response => {
    const imageURL = window.URL.createObjectURL(response);

    myImage.src = imageURL;
    
    body.appendChild(myImage);
  })
  .catch(error => console.error(error));