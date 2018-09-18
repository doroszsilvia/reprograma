const $inputName = document.querySelector('#contatoInputNome');
const $inputEmail = document.querySelector('#contatoInputEmail');
const $inputPhone = document.querySelector('#contatoInputPhone');
const $inputMessage = document.querySelector('#contatoInputMessage');
const $submitButton = document.querySelector('.contato__button');

$submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    
    if ($inputName.value === undefined 
        || $inputName.value === null 
        || $inputName.value.length === 0 
        || $inputName.value === ' ') {
        
        $inputName.focus();
        return false;
    }

    if ($inputEmail.value === undefined
        || $inputEmail.value === null
        || $inputEmail.value.length === 0
        || $inputEmail.value === ''
        || !$inputEmail.value.includes('@')) {

        $inputEmail.focus();
        return false;
    }

    if ($inputPhone.value === undefined
        || $inputPhone.value === null
        || $inputPhone.value.length === 0
        || $inputPhone.value === ''
        || $inputPhone.value.match(/[A-Z]/gi) ) {

        $inputPhone.focus();
        return false;
    }

    if ($inputMessage.value === undefined
        || $inputMessage.value === null
        || $inputMessage.value.length === 0
        || $inputMessage.value === '') {

        $inputMessage.focus();
        return false;
    }

    alert('Validação correta!');
    return true;

});