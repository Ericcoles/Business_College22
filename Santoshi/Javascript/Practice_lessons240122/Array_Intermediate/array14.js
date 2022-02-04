"use strict";

/**
Complete the function getYear such that it returns the searchYear (passed as 2nd parameter) when it's found in the array.
Otherwise, it should return undefined.

/**
 * @param {number[]} years years is the array.
 * @param {number} searchYear searchYear is the number outside the array.
 */
function getYear(years, searchYear) {
  return years.find(function (x) {
    return x === searchYear;
  });
}

// Sample usage - do not modify
console.log(getYear([2019, 2020, 2021], 2020)); // 2020
console.log(getYear([2019, 2020, 2021], 1990)); // undefined
