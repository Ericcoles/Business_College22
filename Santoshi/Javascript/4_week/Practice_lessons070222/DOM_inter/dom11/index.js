// My solution
// const getShortTextParagraphs = () => {
//  x = document.querySelectorAll("p");
//  [...x].map( (p) => if (p.textContent.length>10) {
//    return true}
//    else { return false}
//  )};

//  [14.36] Mursula Otto
const getShortTextParagraphs = () => {
  return [...document.querySelectorAll("p")]
    .filter((p) => p.textContent.length < 10)
    .map((p) => p.textContent);
};

// const getSelectedCurrencies = () => {

//   const cards = document.querySelectorAll(".card.active");

//   return [...cards].map((card) => {

//   return card.textContent;

//   });

// Sample usage - do not modify
console.log(getShortTextParagraphs());
