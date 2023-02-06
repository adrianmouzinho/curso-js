const aliceTumbling = [
  { transform: "rotate(0) scale(1)" },
  { transform: "rotate(360deg) scale(0)" },
];

const aliceTiming = {
  duration: 2000,
  iterations: 1,
  fill: "forwards",
};

const alice1 = document.querySelector("#alice1");
const alice2 = document.querySelector("#alice2");
const alice3 = document.querySelector("#alice3");


// Callback hell
// function animation(animationObject, callback) {
//   animationObject.animate(aliceTumbling, aliceTiming);

//   setTimeout(() => {
//     callback();
//   }, 2000);
// }

// function startAnimation() {
//   animation(alice1, () => {
//     animation(alice2, () => {
//       animation(alice3, () => {});
//     });
//   });
// }

// startAnimation();


// Encadeamento de promises
// alice1.animate(aliceTumbling, aliceTiming).finished
//   .then(response => {
//     return alice2.animate(aliceTumbling, aliceTiming).finished;
//   })
//   .then(response => {
//     alice3.animate(aliceTumbling, aliceTiming);
//   });


// Async e await
async function startAnimation() {
  try {
    await alice1.animate(aliceTumbling, aliceTiming).finished;
    await alice2.animate(aliceTumbling, aliceTiming).finished;
    await alice3.animate(aliceTumbling, aliceTiming).finished;
  } catch (error) {
    console.error(error);
  }

  alert('Animação finalizada!');
}

startAnimation();