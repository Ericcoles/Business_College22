"use strict";

/**
Complete the function getOddYears such that it returns all the years that are odd
from the years parameter it receives.

/**
 * @param {number[]} years
 */
function getOddYears(years) {
  return years.filter(function (x) {
    return x % 2 == 1;
  });
}
//  x%2==1 numbers that leave remainder of 1 are odd, x%2==0 numbers that leave a remainder of zero are even

// Sample usage - do not modify
console.log(getOddYears([2019, 2020, 2021])); // [2019, 2021]
console.log(getOddYears([2000, 2015, 2018, 2020])); // [2015]
