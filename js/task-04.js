/*Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
Обновляй интерфейс новым значением переменной counterValue.*/

const counterValue = document.querySelector('#value');
let number = Number(counterValue.textContent);

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
    number = number - 1;
    counterValue.textContent = number;
}

function increment() {
    number += 1;
    counterValue.textContent = number;
}