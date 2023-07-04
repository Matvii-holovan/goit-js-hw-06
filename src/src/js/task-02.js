const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsArr = ingredients.map((dataingredient) => {
  const itemIngredients = document.createElement('li');
  itemIngredients.classList.add('item')
  itemIngredients.textContent = dataingredient;
  return itemIngredients;
});

console.log(ingredientsArr);

document.querySelector('ul#ingredients').append(...ingredientsArr);

