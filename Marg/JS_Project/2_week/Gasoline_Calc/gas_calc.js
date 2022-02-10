const calculate = () => {
  let price = Number(document.getElementById("price").value);

  let money = Number(document.querySelector("#money").value);

  let amount = Math.floor(money / price);

  let answer = document.querySelector("#answer");

  let text;
  amount >= 10
    ? (text = `You could get about ${amount} liters. Good, now you can Xscape!`)
    : (text = `Oh NO, You could get only ${amount} liters!`);

  answer.textContent = text;

  console.log("price", price);
  console.log("money", money);
  console.log("amount", amount);
};

// # is an id mark while . is for files
