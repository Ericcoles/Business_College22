"use strict";

// Sample usage (do not modify)
const fakeFetch = () => {
  return new Promise((resolve) => {
    const min = 1;
    const max = 3;
    const rand = Math.floor(Math.random() * (max - min + 1)) + min;
    setTimeout(() => {
      resolve();
    }, rand * 1000);
  });
};

/**
 Call this fakeFetch function inside the init function and then move the console.log("Fake fetch completed")
 such that it runs once fakeFetch has completed...*/

const init = () => {
  fakeFetch().then(() => {
    console.log("Fake fetch completed");
  });
};

// Sample usage (do not modify)
init();

// console.log("A");
// randomWait().then(() => {
//     // this runs when the randomWait() function has completed successfully
//     console.log("B");
// })
// console.log("C");
