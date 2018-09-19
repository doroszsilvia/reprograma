const $sidebar = document.querySelector('.sidebar-menu');
const $menuButton = document.querySelector('.sidebar-menu__button');

$menuButton.addEventListener('click', function(event) {
    event.preventDefault();

    if ($sidebar.style.left === '-430px') $sidebar.style.left = '0px';
    else $sidebar.style.left = '-430px';

 });

 /* Outra forma: 
const $sidebar = document.querySelector('.sidebar-menu');
const $menuButton = document.querySelector('.sidebar-menu__button');

let counter = 1;
$menuButton.addEventListener('click', function(event) {
    event.preventDefault();

    $sidebar.style.left = '-430px';
    counter++;
    if (counter % 2 !== 0) {
        $sidebar.style.left = '0px';
    }

});
*/