const $button = document.querySelector('.sidebar-menu__button');
const $sidebar = document.querySelector('.sidebar-menu');

$button.addEventListener('click', function(event) {
    event.preventDefault();

    /* className --> funciona como o innerHTML, substitui o valor
       classList.add --> funciona como o appendChild(), ele adiciona valor
    */
    if ($sidebar.classList.contains('sidebar-menu__visible') ) {
        $sidebar.classList.remove('sidebar-menu__visible');
        $sidebar.classList.add('sidebar-menu__hidden');
    }
    else {
        $sidebar.classList.remove('sidebar-menu__hidden');
        $sidebar.classList.add('sidebar-menu__visible');
    }
});