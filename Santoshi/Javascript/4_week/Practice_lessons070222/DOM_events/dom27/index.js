// TODO: log the button's textContent when it's clicked
const initClickGreeting = () => {
  document.querySelector("#my-button").addEventListener("click", (event) => {
    console.log(event.innerHTML);
  });
};

// Sample usage - do not modify
initClickGreeting();
