"use strict";

/**
Run the code and notice how the console.log shows up after 2 seconds.
Feel free to play around with the code (callback and milliseconds) and see how that affects the result..*/

setTimeout(() => {
  console.log("Hello World! Delayed");
}, 5000);

setTimeout(() => {
  console.log("5");
}, 1000);

setTimeout(() => {
  console.log("4");
}, 1000);
