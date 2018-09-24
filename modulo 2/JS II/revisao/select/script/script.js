const deleteButton = document.querySelector('.select__button');
const comboBox = document.querySelector('#selectInputArea');

deleteButton.addEventListener('click', function(event) {
    event.preventDefault();
    comboBox.removeChild( comboBox[comboBox.selectedIndex] );
});