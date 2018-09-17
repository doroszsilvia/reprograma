const input = document.getElementById('newsInputEmail');
console.log(input);
const button = document.querySelector('.news__button');
console.log(button);

button.addEventListener('click', function(event) {
    event.preventDefault();
    const email = input.value;
    const newsForm = document.querySelector('.news__form');
    newsForm.innerHTML = `O e-mail ${email} foi cadastrado com sucesso!`;
    //alert(`O e-mail ${email} foi cadastrado com sucesso!`);
    //console.log(newsForm.innerHTML);
});