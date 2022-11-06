const inputLink = document.querySelector('#name-input');
const actualName = document.querySelector('#name-output');

inputLink.addEventListener('input', (e) => {
    e.preventDefault;
    if (inputLink.value.length < 1) {
        actualName.textContent = 'Anonymous';
    } else { actualName.textContent = inputLink.value; };
});
