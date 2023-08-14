
const lettersOnlyRegex = /^[A-Za-z]+$/;
const errorName = document.getElementById('name-error');
const submitButton = document.getElementById('submit');

iname.addEventListener('input', function() {
    
    
    const iname = document.getElementById('iname').value;
    
    
    if (lettersOnlyRegex.test(iname)) {
        errorName.textContent = '';
        submitButton.removeAttribute('disabled');
    } else {
        errorName.textContent = 'Digite apenas letras';
        submitButton.setAttribute('disabled', true);
    }
})

const number = document.getElementById('inumber').value;
const numberError = document.getElementById('number-error');

const date = document.getElementById('idate').value;
const dateError = document.getElementById('date-error');

const genrer = document.getElementById('my').value;
const genrerError = document.getElementById('genrer-error');

const cvc = document.getElementsByName('cvc').value;
const cvcError = document.getElementById('cvc-error');

const form = document.getElementById('myform');


form.addEventListener('submit', function(event) {
    const iname = iname.value;

    if (!lettersOnlyRegex.test(iname)) {
        event.preventDefault();
    }
});