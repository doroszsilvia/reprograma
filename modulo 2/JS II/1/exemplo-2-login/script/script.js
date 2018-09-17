const button = document.querySelector('.login__button');

button.addEventListener('click', function(event) {
    event.preventDefault();
    const email = document.querySelector('#loginInputEmail').value;
    const loginForm = document.querySelector('.login__form');
    // o innerHTML pega todo o conteúdo do form e substitui pela string abaixo
    loginForm.innerHTML = `Login com o e-mail ${email} realizado com sucesso!`;
    //alert(`Login com o e-mail ${email} realizado com sucesso!`);
});