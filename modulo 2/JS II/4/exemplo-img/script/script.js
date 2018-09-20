const $linkButton = document.querySelector('.gallery__nav').children;

for (let i = 0; i < $linkButton.length; i++) {
    $linkButton[i].addEventListener('click', function(event) {
        const imagePath = this.dataset.image;
        document.querySelector('.gallery__image').src = imagePath;

        const imageDescription = this.dataset.title;
        document.querySelector('.gallery__caption').innerHTML = imageDescription;
    });
}

