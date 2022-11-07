const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ulEl = document.querySelector('#ingredients')
console.log(ulEl)
const createListOfItems = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.insertAdjacentHTML('afterbegin', `<li>${ingredient}</li>`)
  return liEl
});

ulEl.append(...createListOfItems)