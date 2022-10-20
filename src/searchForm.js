import presentDrinks from "./presentDrinks.js";

const form = document.querySelector(".form");
const input = document.querySelector("#searchInput");

const baseURL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

form.addEventListener("keyup", function (e) {
  e.preventDefault();
  const value = input.value;
  if (!value) return;
  presentDrinks(`${baseURL}${value}`);
});
