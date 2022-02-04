const bmiCalc = () => {
  let weight = Number(document.querySelector("#weight").value);
  let height = Number(document.querySelector("#height").value) / 100;
  let solution = document.querySelector("#solution");

  let bmi = (weight / (height * height)).toFixed(1);

  let text;

  if (bmi < 18.5) {
    text = `BMI is ${bmi}- Underweight`;
    color = "warning";
  } else if (bmi > 18.5 && bmi < 24.9) {
    text = `BMI is okayish ${bmi}`;
    color = "warning";
  } else if (bmi > 25.0 && bmi < 29.9) {
    text = `BMI  ${bmi} - pre-obesity`;
    color = "warning";
  } else if (bmi < 29.9) {
    text = `BMI  ${bmi} - Obesity`;
    color = "danger";
  }

  solution.textContent = text;
  solution.classList.add(color);
};
