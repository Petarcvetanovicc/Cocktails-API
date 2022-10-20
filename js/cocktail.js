import fetchCocktail from "./../src/fetchDrinks.js";
import displayCocktail from "./../src/displayCocktail.js";

const presentCocktail = async () => {
  const id = localStorage.getItem("drink");
  const cocktailData = await fetchCocktail(
    `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  );
  displayCocktail(cocktailData);
};

window.addEventListener("DOMContentLoaded", presentCocktail);
