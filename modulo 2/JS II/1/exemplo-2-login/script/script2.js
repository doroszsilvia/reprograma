const button = document.querySelector('.login__button');

button.addEventListener('click', function(event) {
    event.preventDefault();

    const emailInput = document.querySelector('#loginInputEmail').value;
    const answer = document.createElement('p');
    const answerText = document.createTextNode(`E-mail ${emailInput} cadastrado com sucesso!`);
    answer.appendChild(answerText);

    const loginForm = document.querySelector('.login__form');
    
    loginForm.insertBefore(answer, loginForm.childNodes[2]);
});