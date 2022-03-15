"use strict";

// Sample usage (do not modify)
const getWeatherDescription = (city) => {
  return new Promise((resolve, reject) => {
    if (!city || typeof city !== "string") {
      reject("City must be a string");
    }
    if (!["helsinki", "tokyo"].includes(city.toLowerCase())) {
      reject("City must be Helsinki or Tokyo");
    }
    // simulate network request
    setTimeout(() => {
      if (city.toLowerCase() === "helsinki") {
        resolve("Cloudy");
      }
      if (city.toLowerCase() === "tokyo") {
        resolve("Sunny");
      }
    }, 1000);
  });
};
/**
Implement the logWeatherDescription such that it uses
getWeatherDescription to log the weather description to the console.....*/

/**
 * @param {string} cityName
 */
// const logWeatherDescription = (cityName) => {
//   getWeatherDescription(cityName).then((data) => {
//     console.log(data);
//     // console.log(data.CityName);
//   });
// };

///////////////
// .catch((error) => {
//   console.error(error);
// })
// .finally(() => {
//   console.log(cityName);
// });

// nahome's answer
const logWeatherDescription = (cityName) => {
  getWeatherDescription(cityName)
    .then((data) => {
      console.log(data);

      console.log("Done fetching");
    })

    .catch((error) => {
      console.log(error);

      console.log("Done fetching");
    });
};

// Sample usage - do not modify
logWeatherDescription("Helsinki"); // will eventually log "Cloudy"
logWeatherDescription("Tokyo"); // will eventually log "Sunny"
