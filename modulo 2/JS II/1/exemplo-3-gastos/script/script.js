const button = document.querySelector('.transacao__button');
const inputName = document.querySelector('#transacaoInputName');
const inputValue = document.querySelector('#transacaoInputMoney');
const inputDate = document.querySelector('#transacaoInputDate');

button.addEventListener('click', function(event) {
    event.preventDefault();

    //pega a tabela do html
    const table = document.querySelector('.extrato__table');
    
    //cria uma linha
    const tableRow = document.createElement('tr');
    table.appendChild(tableRow);

    //cria colunas
    const tableColumnName = document.createElement('td');
    const name = document.createTextNode(inputName.value);
    tableColumnName.appendChild(name);

    const tableColumnValue = document.createElement('td');
    const value = document.createTextNode(inputValue.value);
    tableColumnValue.appendChild(value);

    const tableColumnDate = document.createElement('td');
    const date = document.createTextNode(inputDate.value);
    tableColumnDate.appendChild(date);
    
    //inserir colunas na linha
    tableRow.appendChild(tableColumnName);
    tableRow.appendChild(tableColumnValue);
    tableRow.appendChild(tableColumnDate);

    //adiciona linha a tabela
    table.appendChild(tableRow);
});