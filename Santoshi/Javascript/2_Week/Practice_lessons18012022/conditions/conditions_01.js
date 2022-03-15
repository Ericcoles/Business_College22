"use strict";
// use strict is for type checking, strict type checking.

/**
Implement the function canVote such that it returns true whenever the age 18 or above
and false in all other scenarios.

 * @param {number} age
 */
function canVote(age) {
  return age >= 18;
}

// function canVote(age) {
// if (age >=18) {
//   return true;
// } else {
//   return false;
// }
// }

// Sample usage - do not modify
console.log(canVote(25)); // true
console.log(canVote(18)); // true
console.log(canVote(10)); // false
