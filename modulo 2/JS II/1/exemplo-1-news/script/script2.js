const button = document.querySelector('.news__button');

button.addEventListener('click', function(event) {
    event.preventDefault();

    const answer = document.createElement('span');
    const answerText = document.createTextNode('E-mail cadastrado com sucesso!');
    // o appendChild insere o novo elemento em última posição
    answer.appendChild(answerText);
    
    const newsForm = document.querySelector('.news__form');
    // se utilizar o appendChild, o span será colocado em baixo do form. Por isso, é necessário usar o insertBefore. O childNodes lista os nós dentro de um elemento, é um array like.
    newsForm.insertBefore(answer, newsForm.childNodes[0]);
});