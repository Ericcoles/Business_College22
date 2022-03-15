/**
 * @param {string} cssSelector
 */
const getTextFromSelector = (cssSelector) => {
  return document.querySelector(cssSelector)?.textContent;
};

// const element=document.querySelector(cssSelector);
// element+opitional chaining . text content ??

// Sample usage - do not modify
console.log(getTextFromSelector("h1")); // "First human lands on Mars!"
console.log(getTextFromSelector("h2")); // undefined
