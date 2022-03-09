let header = document.querySelector("header");

let button = document.querySelector("#backtoTop");

const mobbutton = document.querySelector("#mobileButton");

const nav = document.querySelector("nav");

window.onscroll = function () {
  scrollFunction();
};
//running the scrollfunction above

const scrollFunction = () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    header.classList.add("bg");
    button.style.display = "block";
  } else {
    header.classList.remove("bg");
    button.style.display = "none";
  }

  // {
  //   header.style.backgroundColor = "#fff";
  //   header.style.color = "#000";
  // } else {
  //   header.style.backgroundColor = "#447fff";
  // }
};

//Above overrides CSS with HMTL. Above is converting to html?

// this is function below is without arrow.

//function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//     header.style.backgroundColor = "#fff";
//   } else {
//     header.style.backgroundColor = "#000";
//   }
// }

///(document.body.scrollTop > 50  for modern browsers, sets when change happens.
////document.documentElement.scrollTop > 50) for older browsers

const gettoTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const mobMenu = () => {
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", mobMenu);
  }
  if (nav.classList.contains("responsive")) {
    nav.classList.remove("responsive");
  } else {
    nav.classList.add("responsive");
  }
};

button.addEventListener("click", gettoTop);

mobbutton.addEventListener("click", mobMenu);

// getElementById is for Id, need id to work
