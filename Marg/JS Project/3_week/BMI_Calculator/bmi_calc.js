const calculate = () => {
  let kg = Number(document.getElementById("kg").value);
  let m = Number(document.getElementById("m").value);
  m *= 0.01;
  let bmi = Math.floor(kg / (m * m).toFixed());
  let answer = document.querySelector("#answer");

  let text;
  bmi >= 30 ? (text = `Oh No, ${bmi} `) : (text = `${bmi} `);

  answer.textContent = text;

  console.log("kg", kg);
  console.log("m", m);
  console.log("bmi", bmi);
};
