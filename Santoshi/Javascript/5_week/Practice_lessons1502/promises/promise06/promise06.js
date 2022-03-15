"use strict";

/**
The function waitForCompleteClick  will complete when the user (you) click on the Complete button in the browser tab.
Update the code in  waitForCompleteClick such that the console.log("Complete clicked"); runs after you click on the complete button.
Unlike the wait() function, this function does not take any parameters.....*/

// Sample usage (do not modify)
const waitForCompleteClick = () => {
  return new Promise((resolve) => {
    document.querySelector("#complete-btn").addEventListener("click", () => {
      resolve();
    });
  });
};

// Update here...
// a(waitForCompleteClick).then((data) => {
//   console.log(data);
// });

waitForCompleteClick().then(() => {
  console.log("Complete clciked");
});

// const waitPromise = wait(1000);
// console.log(waitPromise); // pending at this stage

// waitPromise.then(() => {
//   console.log("waited 1 second");
//   console.log(waitPromise); // fulfilled at this stage
// });
