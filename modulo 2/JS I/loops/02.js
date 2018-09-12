// Escreva um loop em Javascript
// que gera uma matriz de zeros 5x5.
// [ [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0] ]
let arr = [];
for (let i = 0; i < 5; i++) {

    let arrRow = [];
    for (let j = 0; j < 5; j++) {
        arrRow.push(0);
    }
    arr.push(arrRow);
}
console.log(arr);

/* Funciona porque o matrix.push(linha) faz uma referência de memória para a linha. Então ele dá um push quando a linha tá com 5 elementos
for (let i = 0; i < 5; i++) {
linha.push(0);
matrix.push(linha);
}
*/

/* Assim ele resulta em uma escadinha! Procurar sobre [...
for (let i = 0; i < 5; i++) {
linha.push(0);
matrix.push( [... linha);
*/

// Escreva um loop em Javascript
// que gera uma matriz no seguinte
// formato:
// [ [0, 1, 2, 3, 4],
//   [1, 0, 1, 2, 3],
//   [2, 1, 0, 1, 2],
//   [3, 2, 1, 0, 1],
//   [4, 3, 2, 1, 0] ]

console.log('\n');
arr = [];
for (let i = 0; i < 5; i++) {

    let arrRow = [];
    for (let j = (0 - i); j < (5 - i); j++) {
        arrRow.push( Math.abs(j) );
    }
    arr.push(arrRow);
}
console.log(arr);

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// *******
// ******
// *****
// ****
// ***
// **
// *
console.log('\n');
for (let i = 0; i <= 7; i++) {
    
    let text = '';
    for (let j = 0; j < 7 - i; j++) {
        text += '*';
    }
    console.log(`${text}`);

}

// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567 
console.log('\n');
for (let i = 1; i <= 7; i++) {

    let text = '';
    for (let j = 1; j <= i; j++) {
        text += j;
    }

    for (let k = i; k < 7; k++) {
        text += '*';
    }

    console.log(text);
}