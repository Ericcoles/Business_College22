const calculate = () => {
  let lbs = Number(document.querySelector("#lbs").value);
  let kgs = Number(document.getElementById("kgs").value);

  let conversion = Math.floor(lbs * 2.2);

  let result = document.querySelector("#answer");

  let fun;
  amount >= 1000
    ? (fun = `You could loose some weight, ${conversion}`)
    : (fun = `Here is your weight in kilograms, ${conversion} kg`);

  result.textContent = fun;

  console.log("lbs", lbs);
  console.log("kgs", kgs);
  console.log("conversion", conversion);
};
