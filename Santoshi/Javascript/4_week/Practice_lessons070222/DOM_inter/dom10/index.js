const getSelectedCurrencies = () => {
  /// put nodelist values in one variable
  //   let something = document.querySelectorAll(".cards .card.active");
  /// add spread operator to map
  ///  textContent
  /// [...something].map(card=> card.textContent)

  x = document.querySelectorAll(".card.active");
  return [...x].map((t) => t.textContent);
};

// Sample usage - do not modify
document.querySelectorAll(".cards .card").forEach((card) => {
  card.addEventListener("click", (event) => {
    event.currentTarget.classList.toggle("active");
    console.log(getSelectedCurrencies());
  });
});
