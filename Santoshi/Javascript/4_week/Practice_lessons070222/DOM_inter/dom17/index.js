const emptyUserName = () => {
  return (document.querySelector("#user-name").value = "");
};

// Sample usage - do not modify
document.querySelector("#empty-btn").addEventListener("click", () => {
  emptyUserName();
});

// Complete theemptyUserNamefunction such that it removes what the user has written inside the textbox. Make sure to try this challenge in the browser tab. Write a name in the textbox and then click on theEmpty namebutton. You should see the textbox becoming empty.
