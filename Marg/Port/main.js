const mobButton = document.querySelector("#mobileButton");
const nav = document.querySelector("nav");

let links = document.querySelectorAll("nav ul li a");

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
    document.body.style.overflow = "";
  } else {
    nav.classList.add("responsive");
    document.body.style.overflow = "hidden";
  }
};
mobButton.addEventListener("click", mobMenu);
