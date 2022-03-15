const getFullName = () => {
  let first = document.querySelector("#first-name").value;
  let last = document.querySelector("#last-name").value;
  return `${first} ${last}`;
};

// Sample usage - do not modify
const fullName = document.querySelector("#full-name");
const firstName = document.querySelector("#first-name");
const lastName = document.querySelector("#last-name");

const updateFullName = () => {
  fullName.textContent = getFullName();
};
firstName.addEventListener("keyup", () => updateFullName());
lastName.addEventListener("keyup", () => updateFullName());
