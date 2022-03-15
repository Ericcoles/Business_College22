"use strict";

/**
Complete the fakeFetch function such that it returns a promise that resolves successfully after 1 second with the following object
{
/*  departed:false
    delayed: true
}.
*/

const fakeFetch = () => {
  // TODO: implement fake fetch
  return new Promise((resolve) => {
    setTimeout(() => {
      const d = {
        departed: false,
        delayed: true,
      };
      resolve(d);
    }, 3000);
  });
};

// return new Promise((resolve) => {
//     setTimeout(() => {}, 1000);
//     resolve(console.log("resolve"));
//   });

// const waitOneSecond = () => {
//     return new Promise((resolve) => {
//       setTimeout(() => {}, 1000);
//       resolve(console.log("resolve"));
//     });
//   };

// Sample usage - do not modify
fakeFetch().then((data) => {
  console.log(data);
});
