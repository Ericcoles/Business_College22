const button = () => {
  let x = document.querySelector("#my-button");
  x.addEventListener("click", (event) => {
    x.setAttribute("disabled", "disabled");
    x.textContent = "Loading...";
  });
};

// Sample usage - do not modify
button();
