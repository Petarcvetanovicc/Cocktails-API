const displayCocktail = (data) => {
  const drink = data.drinks[0];

  const {
    strDrink: name,
    strInstructions: description,
    strDrinkThumb: image,
  } = drink;

  const list = [
    drink.strIngredient1,
    drink.strIngredient2,
    drink.strIngredient3,
    drink.strIngredient4,
    drink.strIngredient5,
  ];

  const img = document.querySelector(".imgDrink");
  const title = document.querySelector(".titleDrink");
  const desc = document.querySelector(".descDrink");
  const ingredients = document.querySelector(".ingridients");

  img.src = image;
  title.textContent = name;
  desc.textContent = description;

  ingredients.innerHTML = list
    .map(function (item) {
      if (!item) return;
      return `<li>${item}</li>`;
    })
    .join("");
};

export default displayCocktail;
