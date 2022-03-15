"use strict";

/**

This will fail at the moment since it's not implemented so make sure to handle the rejected case.
To handle the rejected case, you need to log the error using console.error.
In the future, once we implement user-details, the code will automatically work because the promise will not reject.......*/

const waitOneSecond = () => {
  return new Promise((resolve) => {
    setTimeout(() => {}, 3000);
    resolve("resolve");
  });
};

// const waitOneSecond = (milliseconds) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const second = milliseconds / 1000;
//       resolve(second);
//     }, milliseconds);
//   });
// };

// Sample usage - do not modify
waitOneSecond().then(() => {
  console.log("Done waiting.");
});

// constwait = (milliseconds) => {
//   returnnewPromise((resolve) => {
//     setTimeout(() => {
//       const seconds = milliseconds / 1000;
//       resolve(seconds);
//     }, milliseconds);
//   });
// };
