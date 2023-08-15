const lettersOnlyRegex = /^[A-Za-z\s]+$/;
const numbersOnlyRegex = /^[0-9\s]+$/;
const submitButton = document.getElementById('submit');
const nameInput = document.getElementById('iname');
const numberInput = document.getElementById('inumber');
const dateInput = document.getElementById('idate');
const dayInput = document.getElementById('iday');
const cvcInput = document.getElementById('cvc');
const nameError = document.getElementById('name-error');
const numberError = document.getElementById('number-error');
const dateError = document.getElementById('date-error');
const dayError = document.getElementById('day-error');
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

dateInput.addEventListener('input', function(){
    const date = dateInput.value.trim();
    const data = document.getElementById('data');


    if (numbersOnlyRegex.test(date)){
        dateError.textContent = '';
        submitButton.removeAttribute('disabled');
        data.textContent = date;
    } else{
        dateError.textContent = 'Data inválida';
        submitButton.setAttribute('disabled', true);
    }
})

dayInput.addEventListener('input', function(){
    const day = dayInput.value.trim();
    const dia = document.getElementById('dia');

    if(numbersOnlyRegex.test(day)){
        dayError.textContent = '';
        submitButton.removeAttribute('disabled');
        dia.textContent = day;
    } else{
        dayError.textContent = 'Data inválida';
        submitButton.setAttribute('disabled', true);

    }
})
cvcInput.addEventListener('input', function(){
    const cvc = cvcInput.value.trim();
    const meio = document.querySelector('.meio');

    if(numbersOnlyRegex.test(cvc)){
        cvcError.textContent = '';
        submitButton.removeAttribute('disabled');
        meio.textContent = cvc;
    } else {
        cvcError.textContent = 'Formato inválido';
        submitButton.setAttribute('disabled', true);
        
    }
})


form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputs = document.querySelectorAll('input');
    const labels = document.querySelectorAll('label');
    inputs.forEach(function(input){
        input.style.display = 'none';
    });

    labels.forEach(function(label){
        label.style.display = 'none'    ;
    })

    

    const section2 = document.querySelector('.section2');
    

    const div = document.createElement('div');
    div.classList.add('finish');
    div.innerHTML = '<div><img src="interactive-card-details-form-main/images/icon-complete.svg" alt="icon-complete"></div><h1>THANK YOU!</h1><p>Weve added your card details</p>';

    section2.appendChild(div);
    

})










