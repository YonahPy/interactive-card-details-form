const lettersOnlyRegex = /^[A-Za-z\s]+$/;
const numbersOnlyRegex = /^[0-9\s]+$/;
const submitButton = document.getElementById('submit');
const nameInput = document.getElementById('iname');
const numberInput = document.getElementById('inumber');
const date = document.getElementById('idate');
const genrer = document.getElementById('my');
const cvc = document.getElementsByName('cvc');
const nameError = document.getElementById('name-error');
const numberError = document.getElementById('number-error');
const dateError = document.getElementById('date-error');
const genrerError = document.getElementById('genrer-error');
const cvcError = document.getElementById('cvc-error');
const className = document.querySelector('.nome');
const classNumbers = document.querySelector('.numeros');
const form = document.getElementById('myform');


nameInput.addEventListener('input', function() {
    const iname = nameInput.value.trim();
    
    if (lettersOnlyRegex.test(iname)) {
        nameError.textContent = '';
        submitButton.removeAttribute('disabled');
        className.textContent = iname;
    } else {
        nameError.textContent = 'Digite apenas letras';
        submitButton.setAttribute('disabled', true);
    }
});

numberInput.addEventListener('input', function(){
    const number = numberInput.value.trim();
    
    if (numbersOnlyRegex.test(number)){
        numberError.textContent = '';
        submitButton.removeAttribute('disabled');
        classNumbers.textContent = number;
    } else{
        numberError.textContent = 'Digite apenas números';
        submitButton.setAttribute('disabled', true);
    }
});
















form.addEventListener('submit', function(event) {
    const iname = iname.value;

    if (!lettersOnlyRegex.test(iname)) {
        event.preventDefault();
    }
});