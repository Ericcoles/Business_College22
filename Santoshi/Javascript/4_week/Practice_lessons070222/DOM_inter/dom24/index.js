// TODO: when the user clicks on '#menu-sidebar' => toggle the class 'show' on '#app-sidebar'

let button = document.querySelector("#menu-sidebar");
let sidebar = document.querySelector("#app-sidebar");
button.addEventListener("click", (event) => {
  sidebar.classList.toggle("show");
});
