// const users = [
//   { id: 1, name: "Sam Doe" },
//   { id: 2, name: "Alex Blue" },
// ];
// const userNamesArray = users.map((user) => user.name);
// const csv = userNamesArray.join(", ");
// console.log(csv);
// console.log(userNamesArray);
// console.log(userNamesArray.join(", "));

// const numbers = [15, 10, 20];

// // const allAbove10 = numbers.every((number) => number >= 10);
// // console.log(allAbove10);

// // const allAbove15 = numbers.every((number) => number >= 15);
// // console.log(allAbove15);

// // const numbers = [15, 10, 20];
// // const allAbove10 = numbers.some((number) => number >= 10);
// // console.log(allAbove10);

// const allAbove15 = numbers.some((number) => number >= 15);
// console.log(allAbove15);

// const items = ["Pen", "Paper", "chalk"];
// items.length = 0;
// console.log(items);

// const items = ["Pen", "Paper", "Staples"];
// const deletedItem = items.splice(1, 1, "pencil");
// console.log(deletedItem);
// console.log(items);

// 3 feb 2022
// const grades = [10, 15, 20];

// const sum = grades.reduce((total, current) => {
//   return total + current;
// }, 0);
// console.log(sum);

const grades = [10, 5, 2];

const sum = grades.reduce((total, current) => {
  return total + current;
}, 0);
console.log(sum);
