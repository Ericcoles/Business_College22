// TODO: clicking on 'Toggle dark mode' should add/remove 'dark' class on <html>

let button = document.querySelector("html");

button.addEventListener("click", (event) => {
  button.classList.toggle("dark");
});
