const $linkList = document.querySelector('.gallery__nav');

//console.log($linkList.childNode); o child Node retorna TODOS os nós. o children retorna apenas tag HTML

for (let i = 0; i < $linkList.children.length; i++) {
    $linkList.children[i].addEventListener('click', function() {
        // dataset pega atributo de data
        const image = this.dataset.image;
        document.querySelector('.gallery__image').src = image;
    });
}