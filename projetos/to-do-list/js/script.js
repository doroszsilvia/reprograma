const form = document.querySelector('.form');
const inputForm = document.getElementById('inputForm');
const buttonForm = document.getElementById('buttonForm');
const list = document.querySelector('.list');
let listChildrens;
const pseudoBody = document.querySelector('.pseudo-body');
let counter = 1; // contador para o ID dos elementos <li>

buttonForm.addEventListener('click', function(event) {
    event.preventDefault();
    const warningText = document.querySelector('.warning-text');

    if (!inputForm.value || !inputForm.value.length || !inputForm.value.match(/\S/g)) {
        warningText.innerHTML = 'Por favor, preencha o campo de tarefa!';
        return;
    }

    if ( warningText.textContent !== '' ) warningText.textContent = '';
    
    const newItem = document.createElement('li');
    newItem.classList.add('list__item');
    newItem.classList.add('flex');
    newItem.setAttribute('draggable', true);

    // colocando um id para os elementos <li>
    newItem.id = `list__item${counter}`;
    counter++;

    const newItemText = document.createElement('p');
    newItemText.innerHTML = inputForm.value;
    newItem.appendChild(newItemText);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    deleteButton.classList.add('button-delete');
    newItem.appendChild(deleteButton);

    list.appendChild(newItem);
    inputForm.value = '';

    newItem.firstChild.addEventListener('click', function(event) {

        if (event.ctrlKey) { // para adicionar ou remover o check em todos os elementos
            const listItens = document.querySelectorAll('.list__item');

            if (this.classList.contains('item-checked') ) {
                for (let item of listItens) {
                    item.firstChild.classList.remove('item-checked');
                }
            }
            else {
                for (let item of listItens) {
                    item.firstChild.classList.add('item-checked');
                }
            }
            return;
        }

        if (this.classList.contains('item-checked') ) { // para remover o check em um elemento
            this.classList.remove('item-checked');
            return;
        }

        this.classList.add('item-checked'); // para adicionar o check em um elemento
    });


    newItem.lastChild.addEventListener('click', function(event) {

        if (event.ctrlKey) { // Se na hora do click a tecla Ctrl estiver pressionada
                const deleteButtonsList = document.querySelectorAll('.button-delete'); // pega todos os elementos que possuem classe button-delete
                for (let btn of deleteButtonsList) {
                    btn.classList.add('selectedButton'); // adiciona a classe selectedButton
                }
            return;
        }

        if (this.classList.contains('selectedButton')) { // se o newItem possui a classe selectedButton
            const selectedButtonList = document.querySelectorAll('.selectedButton'); // pega todos os elementos que possuem classe selectedButton
            for (let btn of selectedButtonList) { // remove todos os itens com a classe selectedButton
                btn.closest('li').remove();
            }
            counter = 1;
            return;
        }

        // exclui apenas o item vigente
        this.closest( 'li' ).remove(); 
    });
});

// o pseudoBody serve para desfazer a seleçã(o de todos os itens que estavam para ser excluidos
pseudoBody.addEventListener('click', function() {

    if (list.hasChildNodes() ) { // verifica se a lista possui filhos
        const deleteButtonsList = document.querySelectorAll('.button-delete'); // pega todos os botões de deletar
        for (let btn of deleteButtonsList) {
            btn.classList.remove('selectedButton'); // remove a classe selectedButton
        }
    }
});

/* --------------------------------EVENTOS DE DRAG E DROP----------------------------- */
let draggedItem;

document.addEventListener('dragstart', function(event){
    draggedItem = event.target;
});

document.addEventListener('dragover', function(event){
    event.preventDefault();    
});

document.addEventListener('dragenter', function(event){

    const listChildrens = list.children;
    const newLi = document.createElement('li');
    newLi.classList.add('list__item_model');

    if (event.target.classList.contains('list__item')) {
        const locatedElement = findElementLocation(event.target);

        cleanLiModel();
        if (listChildrens[locatedElement].nextSibling !== null) {
            if (listChildrens[locatedElement].nextSibling.textContent === '') return;
            list.insertBefore(newLi, listChildrens[locatedElement].nextSibling);
            return;
        }

        list.appendChild(newLi);
    }

    if (event.target.classList.contains('button')) {
        cleanLiModel();
        list.insertBefore(newLi, listChildrens[0]);
    }
});

document.addEventListener('drop', function(event){
    event.preventDefault();
    if (event.target.classList.contains('list__item_model')) {
        list.insertBefore(draggedItem, event.target);
        event.target.remove();
    }
    cleanLiModel();
});

// Função que localiza o index do event.target no elemento <ul>
function findElementLocation(eventTarget) {
    const textListChildrens = list.querySelectorAll('.list__item');
    const locateElement = Object.keys(textListChildrens).filter( function(item) {
        if (textListChildrens[item] === eventTarget) {
            return item;
        }
    });
    return parseInt(locateElement.toString());
}

// Função que limpa todos os <li> que são model
function cleanLiModel() {
    for (let itemModel of list.children) {
        if (itemModel.classList.contains('list__item_model')) {
            itemModel.remove();
        }
    }
}