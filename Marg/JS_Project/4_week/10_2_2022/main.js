// let carData = {
//   lisenceNumber:
//   carMaker:
// }

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

let formInput = document.querySelector("#inputData");

class Car {
  constructor(licence, maker, model, owner, price, color) {
    this.licence = licence;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}
const carArray = [];

const addCar = (event) => {
  event.preventDefault();
  let licence = document.querySelector("#licence").value;
  let maker = document.querySelector("#maker").value;
  let model = document.querySelector("#model").value;
  let owner = document.querySelector("#owner").value;
  // let price = Number(document.querySelector("#price")).value;
  let price = document.querySelector("#price").value;

  let color = document.querySelector("#color").value;

  let newCar = new Car(licence, maker, model, owner, price, color);

  carArray.push(newCar);

  console.table(carArray);

  console.log(
    "form was submitted",
    licence,
    maker,
    owner,
    model,
    +price,
    color
  );
};

formInput.addEventListener("submit", addCar);