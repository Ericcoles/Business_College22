"use strict";

/**
Update the delayedWelcome function such that it delays the console.log
call 1 second into the future.*/

/**
 * @param {string} name
 */
const delayedWelcome = (name) => {
  setTimeout(() => {
    console.log(`Welcome ${name}`);
  }, 1000);
};

//  setTimeout(() => {
//         console.log("Hello World! Delayed");
//       }, 5000);

// Sample usage - do not modify
delayedWelcome("Sam");
delayedWelcome("Alex");

// console.log(delayedWelcome("Sam"));
// console.log(delayedWelcome("Alex"));
