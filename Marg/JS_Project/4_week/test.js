// let car = {
//   mark: 12323,
//   year: 1969,
//   owner: "Lenny Cravits",
//   city: "Los Angles",
//   calcAge: function () {
//     this.age = 2022 - this.year;
//     // car.age = 2022 - car.year;
//     return this.age;
//   },
// };
// console.log(car.calcAge());
// console.log(car);
// console.log(car.mark);
// console.log(car.owner);

// car.color = "red";

// delete car.city;

// console.log(car);
////////////////////////
// const car = new Object();

// car.mark = 12323;
// car.year = 1969;
// car.owner = "Lenny Cravits";
// car.city = "Los Angles";

// delete car.city;

// console.log(car);

/////////////////

// function Person(first, last, age, eye) {
//   this.firstName = first;
//   this.lastName = last;
//   this.age = age;
// }

// Person.prototype.nationality = "English";

// let myFather = new Person("John", "Doe", 50, "blue");
// let myMother = new Person("Sally", "Rally", 48, "green");

class Person {
  constructor(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
  }
}
