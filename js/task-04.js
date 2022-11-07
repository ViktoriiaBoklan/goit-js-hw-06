const counterValue = document.querySelector('#value');
let number = Number(counterValue.textContent);

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);

function decrement() {
    number -= 1;
    counterValue.textContent = number;
}

function increment() {
    number += 1;
    counterValue.textContent = number;
}