/**
 * Complete the function getApps such that it returns a new array containing the items from both parameters it receives.
 * @param {string[]} apps1
 * @param {string[]} apps2
 */
const getApps = (apps1, apps2) => {
  const apps12 = [...apps1, ...apps2];
  return apps12;
};

// Sample usage - do not modify
console.log(getApps(["Calculator", "Whatsapp"], ["Chrome", "Firefox"])); // ["Calculator", "Whatsapp" "Chrome", "Firefox"]
