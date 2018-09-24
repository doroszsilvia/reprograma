const table = document.querySelector('.respostas__table');
const submitButton = document.querySelector('.feedback__button');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    
    const tableRow = document.createElement('tr');
    const tableColumnCount = table.getElementsByTagName('th').length;
    const formInputs = document.querySelector('.feedback__form').querySelectorAll('.feedback__input');

    for (let columns = 0; columns < tableColumnCount; columns++) {
        const tableData = document.createElement('td');

        if (!formInputs[columns].value) {
            formInputs[columns].focus();
            return false;
        }
        tableData.innerHTML = formInputs[columns].value;
        tableRow.appendChild(tableData);

        formInputs[columns].value = '';
    }

    table.appendChild(tableRow);
});