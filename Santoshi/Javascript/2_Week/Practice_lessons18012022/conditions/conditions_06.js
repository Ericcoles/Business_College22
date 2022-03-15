"use strict";

/**
Write a function named assignGrade that:
takes 1 argument, a number score.
returns a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works.

/**
 * @param {string}
 */

function assignGrade(score) {
  if (score >= 90) {
    return "A";
  }
  if ((score < 90, score > 80)) {
    return "B";
  }
  if (score <= 65) {
    return "F";
  }
}

console.log("You got a " + assignGrade(95));
console.log("You got a " + assignGrade(85));
console.log("You got a " + assignGrade(65));
