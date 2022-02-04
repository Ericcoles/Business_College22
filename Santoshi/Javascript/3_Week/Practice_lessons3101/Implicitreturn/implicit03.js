"use strict";

/**
Complete the function getPositiveTemperatures such that it returns an array containing the positive temperatures (the temperatures that are above 0).
Use an arrow function (implicit return is optional).
/**
 * @param {number} value
 */
// function getPositiveTemperatures() {}

const getPositiveTemperatures = (temperatures) =>
  temperatures.filter((temperature) => temperature >= 0);

// Sample usage - do not modify
// console.log(getPositiveTemperatures[(2, 4)]); // 8
console.log(getPositiveTemperatures([-2, -4, 8]));

// const fullName = "  Eric Coles";
// console.log(fullName.trim());

// or reassign using trim

// let fullName = ' Eric Coles';
// fullName = fullName.trim();
// console.log(fullName);
// const sentence = "The fox jumps overs the lazy dog";
// console.log(sentence.startsWith("T"));
// console.log(sentence.startsWith("The"));
// console.log(sentence.startsWith("Welcome"));
// console.log(sentence.startsWith("chen"));

// let apps = "Calculator,Phone,Contacts";
// let appsArray = apps.split(" , ");
// console.log(appsArray);

// const message = "You are welcome.";
// message.replace(" ", "_");
// console.log(message.replace(" ", "_"));

const message = "You are welcome.";
// message.replace(" ", "_");
console.log(message.replaceAll(" ", "_"));
