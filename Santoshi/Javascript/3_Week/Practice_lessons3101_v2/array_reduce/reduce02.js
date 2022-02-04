"use strict";

/**
Calculate the sum of the grades array and store it in a variable called sum.

/**
 *
 */
let grades = [10, 5, 15, 20];

let sum = grades.reduce((total, current) => {
  console.log(`Total is ${total}`);
  console.log(`Current is ${current}`);
}, 0);

// calculate the sum of these grades
