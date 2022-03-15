// const positions = document.querySelector("#job-positions");
// positions.insertAdjacentHTML(
//   "beforeend",
//   `<div  class="position">2015-2020</div>`
// );

const positions = document.querySelector("#job-positions");
positions.insertAdjacentHTML(
  "afterbegin",
  `<div  class="position">2015-2020</div>`
);

const apps = ["calc", "phone", "mess"];
const list = document.querySelector("apps-list");

apps.forEach((app) => {
  list.insertAdjacentHTML("beforeend", `<li>${app}</li>`);
});
