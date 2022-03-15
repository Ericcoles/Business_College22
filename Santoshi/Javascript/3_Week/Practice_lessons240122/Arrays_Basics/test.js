// const grades = [10, 23, 23, 22];

// grades.forEach(function (
//   grade // Do something here
// ) {
//   console.log(grade);
// });

// function logUsersIds(userIds) {
//   userIds.forEach(function (userID) {
//     console.log(userID);
//   });
// }

/// Tuesday 25th Jan 2022

// let numbers = [9, 5, 14, 2, 11];

// let numbersAboveTen = numbers.filter(function (number) {
//   return number >= 10;
// });
// console.log(numbersAboveTen);

// (function (number) { return number >=10;}); in this the (number) goes through each number in array and compares it to the return number >=10, and goes from beginning to end of the array.

// let x = [9, 5, 14, 2, 11];

// let numbersAboveTen = x.filter(function (x) {
//   return x >= 10;
// });
// console.log(numbersAboveTen);

// let years = [2010, 2011, 2020, 2009, 2021];

// let numbersAboveTen = years.filter(function (years) {
//   return years >= 2010;
// });
// console.log(numbersAboveTen);

// let names = ["Toni", "Eric", "Oscar", "Sonija"];

// let result = names.find(function (name) {
//   return name === "Sonija";
// });
// console.log(result);

// let numbers = [9, 5, 14, 3, 11];

// let result = numbers.filter(function (numbers) {
//   return numbers > 15;
// });
// console.log(result);

// Find goes through array and returns the first value then stops or returns undefined if nothing matches.
//filter goes through the array and returns all values that match or empty brackets if nothing matches.
// const numbers = [4, 2, 5, 8];
// const doubled = numbers.map(function (number) {
//   return number * 2;
// });
// console.log(doubled);

// function namesTo(name) {
//   const names = ["sam", "Alex"];
//   let result = names.map(function (name) {
//     return name.toUpperCase();
//   });
//   return result;
// }
// console.log(namesTo("sam"));

// const groceries = ["Apple", "Peach", "Tomato"];
// groceries.includes("Tomato");
// console.log(groceries.includes("Tomato"));

// const groceries = ["Apple", "Peach", "Tomato"];
// groceries.toString();
// console.log(groceries.toString());

// const groceries = ["Apple", "Peach", "Tomato"];
// groceries.toString();
// groceries.join(": ");
// console.log(groceries.join(". "));

// const user = { id: 1, firstName: "Sam", lastName: "Doe", age: 20 };
// console.log(user);

// const user = { id: 1, firstName: "Sam", lastName: "Doe", age: 20 };
// console.log(user.lastName);

// const user = { id: 1, firstName: "Sam", lastName: "Doe", age: 20 };
// user.lastName = "Bond";
// user.age = user.age + 1;
// console.log(user);

// function addOne(number) {
//   return number + 1;
// }
// console.log(addOne(5));
// console.log(addOne(7));
// console.log(addOne());

// function addOne(number = 0) {
//   return number + 1;
// }
// console.log(addOne(5));
// console.log(addOne(7));
// console.log(addOne());

// function addOne(a, b) {
//   return a + b;
// }
// console.log(addOne(5, 3));
// console.log(addOne(7, 2));
// console.log(addOne(1));

function sum(a, b) {
  return a + b;
}

const sumNew = function (a, b) {
  return a + b;
};

const sumNew = (a, b) => {
  return a + b;
};
