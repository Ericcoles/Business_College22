// 1. Make a program that prints all positive numbers that are odd and smaller than 100 starting from 1. (1 3 5 7 9 11…)

// for (let x = 1; x <= 100; x++ or x+=2) {
//   (not needed) if (x % 2 == 1) {
//     console.log(x);
//   }
// }

// 2. Make a program that prints all positive numbers that are smaller than 100 and even, in this order: 2 98 4 96 6 94 …

// Marg answer
// let result = "";
// let end = 98;
// for (let i = 2; i < 100; i += 2) {
//   result += " " + i + " ";
//   result += " " + end + " ";
//   end -= 2;
// }
// console.log(result);

// Toni's answer
// for (let i = 2; i < 50; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//     console.log(100 - i);
//   }
// }

// Svetlana answer
// let k = 99;
// for (let j = 1; j <= 100; j++) {
//   if (j % 2 === 0) {
//     console.log(j);
//   }
//   if (k % 2 === 0) {
//     console.log(k);
//   }
//   k--;
// }

// let i = 0;
// while (i <= 100) {
//   i += 2;
//   console.log(i);
//   console.log(100 - i);
// }

// My attempts :/
// for (let x = 0; x <= 100; x++) {
//   if (x % 2 == 0) {
//     for (let y = 100; y <= 100; y--) {
//       if (y % 2 == 0) {
//         console.log(x, y);
//       }
//     }
//   }
// }

// for (let x = 0; x <= 100; x++) {
//   if (x % 2 == 0) {
//     for (let y = 100; y >= 0; y--) {
//       if (y % 2 == 1) {
//         console.log(x, y);
//       }
//     }
//   }
// }

// for (let x = 0; x <= 100; x++) {
//   if (x % 2 == 0) {
//     for (let y = 100; y >= 0; y--) {
//       if (y % 2 == 1) {
//         console.log(x, y);
//       }
//     }
//   }
// }

// for (let x = 0; x <= 100; x++) (let y = 100; y >= 0; y--) {
//   if (x % 2 == 0) (y % 2 == 1) {
//   {
//         console.log(x, y);
//       }
//   }
// }

// 3. Make a program that asks repeatedly from the user the distance (km) and time (h) and calculates average speed. The program ends when user gives 0 for the distance. (After getting 0, the program does not ask anything from the user.)

// let distance, time;

// while (distance != 0) {
//   distance = prompt("Enter distance in kilometers");
//   time = prompt("Enter time in hours");
//   average = distance / time;
//   console.log("average is", average);
// }

// while (true) {
//   let distance = prompt("Enter distance in km (Enter 0 to quit):");
//   if (distance === 0) break;
//   let time = prompt("Enter time in h:");
//   console.log("Average speed is " + distance / time);
// }

// do {
//   let distance = prompt("tell me the distance");

//   Number.parseInt(distance, 10);

//   let time = prompt("tell me the time");

//   Number.parseInt(time, 10);

//   alert(`Your average speed is ${distance / time}`);
// } while (distance !== "0");

// 4. Make a program that asks 20 numbers from user. After that the program prints out how many of those numbers where even.

// otto's answer
// let times = 0;

// for (let i = 0; i <= 20; i++) {
//   let num = prompt("tell me a number");

//   if (num % 2 === 0) times++;
// }

// console.log(times);

// Marg's answer
// let even = 0;

// for (let counter = 0; counter < 5; counter++) {
//   let input = Number(prompt("enter a number"));
//   {
//     even++;
//   }
// }
// console.log("there was", even, "numbers");

// Svetlana's answer
let count = 0;
for (let l = 0; l < 5; l++) {
  num = prompt("Enter a number:");
  if (num % 2 === 0) count++;
}
console.log("The number of even numbers: " + count);
