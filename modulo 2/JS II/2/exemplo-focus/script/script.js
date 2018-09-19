const $inputName = document.querySelector('#cadastroInputNome');
const $inputEmail = document.querySelector('#cadastroInputEmail');
const $inputEmailConfirm = document.querySelector('#cadastroInputEmailConfirm');
const $inputPassword = document.querySelector('#cadastroInputPassword');
const $inputPasswordConfirm = document.querySelector('#cadastroInputPasswordConfirm');
const $inputPhone = document.querySelector('#cadastroInputPhone');
const $inputArea = document.querySelector('#cadastroInputArea');
const $inputLevel = document.querySelectorAll('[name="level"]');
const $inputNews = document.querySelector('#cadastroInputNews');
const $submitButton = document.querySelector('.cadastro__button');
const $body = document.querySelector('body');

$submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    if ($inputName.value === undefined || $inputName.value === null ||
        $inputName.value.length === 0 || $inputName.value === ' ') {
        $inputName.focus();
        return false;
    }

    if ($inputEmail.value === undefined || $inputEmail.value === null ||
        $inputEmail.value.length === 0 || $inputEmail.value === ' ') {
        $inputEmail.focus();
        return false;
    }

    if ($inputEmailConfirm.value !== $inputEmail.value) {
        $inputEmailConfirm.focus();
        return false;
    }

    if ($inputPassword.value === undefined || $inputPassword.value === null ||
        $inputPassword.value.length === 0 || $inputPassword.value === ' ' ||
        $inputPassword.value.length < 7) {
        $inputPassword.focus();
        return false;
    }

    if ($inputPasswordConfirm.value !== $inputPassword.value) {
        $inputPasswordConfirm.focus();
        return false;
    }

    if ($inputPhone.value === undefined || $inputPhone.value === null ||
        $inputPhone.value.length === 0 || $inputPhone.value === ' ' || $inputPhone.value.match(/[A-Z]/gi)) {
        $inputPhone.focus();
        return false;
    }

    if ($inputLevel[0].checked) {
        console.log(' 0 - 2 anos de experiência');
    }
    else if ($inputLevel[1].checked) {
        console.log('2 - 5 anos de experiência');
    }
    else if ($inputLevel[2].checked) {
        console.log('5+ anos de experiência');
    }

    /* 
    let $radioSelected;
    for (let i = 0; i < $inputLevel.length; i++) {
        if($inputLevel[i].checked) $radioSelected = $inputLevel[i].value;
    }

    if ($radioSelected === 'Junior') {
        console.log(' 0 - 2 anos de experiência');
    }
    else if ($radioSelected === 'Pleno') {
        console.log('2 - 5 anos de experiência');
    }
    else if ($radioSelected === 'Senior') {
        console.log('5+ anos de experiência');
    }
    */
 
    if (!$inputNews.checked) {
        $inputNews.focus();
        alert('É uma pena que você não deseja receber nosso conteúdo exclusivo :c');
        return false;
    }

    $body.style.backgroundColor = 'white';
    // this.closest(x) vai pegar o elemento pai mais próximo que é um elemento x
    this.closest('form').submit();
    return true;
});

$inputArea.addEventListener('change', function() {
    const optionSelect = $inputArea.options[$inputArea.selectedIndex];

    if (optionSelect.value === 'Front-End') {
        $body.style.backgroundColor = 'lightblue';
    } 
    else if (optionSelect.value === 'Back-End') {
        $body.style.backgroundColor = 'lightgreen';
    } 
    else if (optionSelect.value === 'UX Designer') {
        $body.style.backgroundColor = 'pink';
    } 
    else if (optionSelect.value === 'UI Designer') {
        $body.style.backgroundColor ='orange';
    }
});

$inputEmailConfirm.addEventListener('paste', function(event) {
    event.preventDefault();
    return false;
})