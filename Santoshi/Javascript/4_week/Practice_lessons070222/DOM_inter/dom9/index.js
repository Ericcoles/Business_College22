const logLinksTexts = () => {
  x = document.querySelectorAll("a");
  [...x].map((a) => console.log(a.textContent));
};

// Sample usage - do not modify
logLinksTexts();
