/**
 * @param {string} name
 */
const setWelcomeMessage = (name) => {
  return (document.querySelector("#name").innerHTML = name);
};

// Sample usage - do not modify
setWelcomeMessage("Sam");
setWelcomeMessage("<h2>You have been hacked</h2>");
