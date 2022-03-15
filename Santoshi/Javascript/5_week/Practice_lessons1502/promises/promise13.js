"use strict";

/**
Implement a function wait(milliseconds) that returns a promise and fulfills after milliseconds have elapsed.
Look at the sample usage to see how the function is being used.*/

// const waitOneSecond = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {}, 1000);
//   });
// };

const waitOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {}, 1000);
    resolve(console.log("resolve"));
  });
};

const wait = (milliseconds) => {
  returnnewPromise((resolve, reject) => {
    resolve("resolve");
    reject("reject");
  });
};

// const wait = (milliseconds) => {
//   returnnewPromise((resolve) => {
//     setTimeout(() => {
//       const seconds = milliseconds / 1000;
//       resolve(seconds);
//     }, milliseconds);
//   });
// };

// Sample usage - do not modify
waitOneSecond().then(() => {
  console.log("Done waiting.");
});
