"use strict";

/**
Every time you click on the Start game button, it is currently calling the startGame() and logAnalytics() functions.
Update the event listener such that it only calls the startGame() once, but keeps calling logAnalytics() every time.
**/

let activated = true; // will run, true will run

const button = document.querySelector("#app-button");
button.addEventListener("click", (e) => {
  //   startGame();
  if (activated === true) {
    // if true
    startGame();
    activated = false; // will not run
  }
  return logAnalytics();
});

// window.addEventListener("load", () => {
//   setInterval(logAnalytics, 1000);
// });

// do not modify
function startGame() {
  console.log("game started!");
}

// do not modify
function logAnalytics() {
  console.log("log analytics");
}
