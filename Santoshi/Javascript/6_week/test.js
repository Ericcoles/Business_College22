// Returns two console messages

// let p = new Promise((resolve, reject) => {
//   reject(Error("This fails"));
// });
// p.catch((error) => console.log(error.message));
// p.catch((error) => console.log(error.message));

// Returns error

// let p = new Promise((resolve, reject) => {
//   return Promise.reject(Error("This fails"));
// });
// p.catch((error) => console.log(error.message));
// p.catch((error) => console.log(error.message));

// Returns one console log and one error.
// let p = new Promise((resolve, reject) => {
//   return reject(Error("This fails"));
// })
//   .catch((error) => console.log(error.message))
//   .then((error) => console.log(error.message));

// Only one object, p, so it only prints the message once. Only one chaining....
// let p = new Promise((resolve, reject) => {
//   reject(Error("This fails"));
// })
//   .catch((error) => console.log(error.message))
//   .catch((error) => console.log(error.message));

// Catch can be used to override error messages, so it prints nothing.
// new Promise((resolve, reject) => {
//   resolve("Oh No");
// })
//   .then(() => {
//     throw Error("Oh no");
//   })
//   .catch((error) => {
//     return "actually, that works";
//   })
//   .catch((error) => console.log(error.message));

// Prints SUCCESS
// Promise.resolve("Success")
//   .then((data) => {
//     return data.toUpperCase();
//   })
//   .then((data) => {
//     console.log(data);
//   });
