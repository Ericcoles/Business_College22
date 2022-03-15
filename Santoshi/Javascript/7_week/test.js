// function sayHello() {
//   var message; //this is hoising
//   console.log(message); // this is undefined
//   message = "james";
//   console.log(message);
//   return message;
// }

// sayHello();

// function sayHello() {
//   console.log("Happy Womens day");
// }

// sayHello();

const min_age = 18;

const canVote = (age) => {
  if (age >= min_age) {
    return true;
  }
};

console.log(canVote(20));
