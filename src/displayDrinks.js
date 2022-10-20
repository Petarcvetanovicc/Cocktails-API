const displayDrinks = ({ drinks }) => {
  const noItemTitle = document.querySelector(".no-item-title");
  const section = document.querySelector(".section-centar");
  if (!drinks) {
    noItemTitle.textContent = "Sorry, no item matched";
    section.innerHTML = null;
    return;
  }

  let newDrinks = drinks
    .map((drink) => {
      const { idDrink: id, strDrink: name, strDrinkThumb: image } = drink;
      return `<a href="cocktail.html">
            <article class="single-cocktail" data-id="${id}">
                <img src="${image}" alt="">
                <h3>${name}</h3>
            </article>
        </a>`;
    })
    .join("");
  noItemTitle.textContent = "";
  section.innerHTML = newDrinks;
  return section;
};

export default displayDrinks;
