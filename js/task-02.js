const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

/*Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients.
*/

const ulEl = document.querySelector('#ingredients')
console.log(ulEl)
const createListOfItems = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.insertAdjacentHTML('afterbegin', `<li>${ingredient}</li>`)
  return liEl
});

ulEl.append(...createListOfItems)