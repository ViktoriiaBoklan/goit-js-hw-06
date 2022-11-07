const checkSymbols = document.getElementById('validation-input');
console.log(checkSymbols);

checkSymbols.addEventListener('blur', (i) => {
    i.preventDefault;
    checkSymbols.classList.remove('valid', 'invalid');
    if (checkSymbols.value.length === 0) {return}
    if (checkSymbols.value.length === Number(checkSymbols.getAttribute('data-length'))) {
       checkSymbols.classList.add('valid');
    } else {
        checkSymbols.classList.add('invalid');
    }
}
);