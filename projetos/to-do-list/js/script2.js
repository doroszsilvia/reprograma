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

    console.log(newItem)
    const newItemText = document.createElement('p');
    newItemText.innerHTML = inputForm.value;
    newItem.appendChild(newItemText);

    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = 'x';
    deleteButton.classList.add('button-delete');
    newItem.appendChild(deleteButton);

    list.appendChild(newItem);
    inputForm.value = '';

    const item = document.querySelector(".list__item");
    item.addEventListener('mousedown', mouseDown);
    function mouseDown() {// (1) start the process

        // (2) prepare to moving: make absolute and top by z-index
        item.style.position = 'absolute';
        item.style.zIndex = 1000;
        item.style.opacity = '0.5';
    
        // ...and put that absolutely positioned newItem under the cursor
        moveAt(event.pageY);
    
        // centers the newItem at (pageX, pageY) coordinates
        function moveAt(pageY) {
        item.style.top = pageY - newItem.offsetHeight / 2 - 250 + 'px';
        }
    
        function onMouseMove(event) {
        moveAt(event.pageY);
        for (let i = 0; i < event.length; i++){
            const item_seguinte = 
        }
        }
    
        // (3) move the newItem on mousemove
        document.addEventListener('mousemove', onMouseMove);
    
        // (4) drop the newItem, remove unneeded handlers
        newItem.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        newItem.onmouseup = null;
        };
    
    };
    
    newItem.ondragstart = function () {
        return false;
    };

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
//const newItem = document.querySelector('li');

// newItem.onmousedown = function (event){ // (1) start the process
//     console.log(newItem);

//   // (2) prepare to moving: make absolute and top by z-index
//   newItem.style.position = 'absolute';
//   newItem.style.zIndex = 1000;
//   // document.body.appendChild(newItem);

//   // ...and put that absolutely positioned newItem under the cursor
//   moveAt(event.pageY);

//   // centers the newItem at (pageX, pageY) coordinates
//   function moveAt(pageY) {
//     newItem.style.top = pageY - newItem.offsetHeight / 2 + 'px';
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageY);
//   }

//   // (3) move the newItem on mousemove
//   document.addEventListener('mousemove', onMouseMove);

//   // (4) drop the newItem, remove unneeded handlers
//   newItem.onmouseup = function () {
//     document.removeEventListener('mousemove', onMouseMove);
//     newItem.onmouseup = null;
//   };

// };

// newItem.ondragstart = function () {
//   return false;
// };