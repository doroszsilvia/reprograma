const $button = document.getElementById('arrowTop');

$button.addEventListener('click', function() {
    // não precisa do preventDefault(), pois ele está fora de um formulário
    window.scrollTo(pageYOffset, 0);
});

window.addEventListener('scroll', function() {
    console.log(pageYOffset);
    console.log($button.hidden);

    if (pageYOffset > 1500) {
        $button.hidden = false;
        return false;
    }
    $button.hidden = true;
});