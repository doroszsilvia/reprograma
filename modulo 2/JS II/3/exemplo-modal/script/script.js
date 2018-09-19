const $loginButton = document.querySelector('.login__button');
const $loginClose = document.querySelector('.login-modal__button-close');
const $loginForm = document.querySelector('.login-modal');

$loginButton.addEventListener('click', function(event) {
    event.preventDefault();
    $loginForm.style.display = 'flex';
});

$loginClose.addEventListener('click', function(event) {
    event.preventDefault();
    $loginForm.style.display = 'none';
});