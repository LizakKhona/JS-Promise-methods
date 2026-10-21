// 1
function delayedPromise(text, delay) {
  return new Promise((resolve) => setTimeout(() => resolve(text), delay));
}

const promise1 = delayedPromise("Something's wrong...", 2000);
const promise2 = delayedPromise("Oops!", 1000);
const promise3 = delayedPromise("Error! Try again!", 3000);
const promise4 = delayedPromise("Error!", 5000);
const promise5 = delayedPromise("There must be a problem...", 4000);

Promise.all([promise1, promise2, promise3, promise4, promise5]).then(
  (response) => console.log(response),
);

// 2

function randomDelay(text) {
  const randomDelay = Math.random() * (5000 - 1000) + 1000;
  return new Promise((resolve) => setTimeout(() => resolve(text), randomDelay));
}

const myPromise1 = randomDelay("promise value 1");
const myPromise2 = randomDelay("promise value 2");
const myPromise3 = randomDelay("promise value 3");
const myPromise4 = randomDelay("promise value 4");
const myPromise5 = randomDelay("promise value 5");

Promise.race([myPromise1, myPromise2, myPromise3, myPromise4, myPromise5]).then(response => console.log(response))