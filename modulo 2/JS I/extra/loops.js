// Escreva um loop que
// printa no console os dez
// primeiros números naturais.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Escreva um loop que
// calcula a soma dos
// cem primeiros números
// impares, começando pelo 1.
let soma = 0;
for (let i = 1; i <= 100; i+=2) {
    soma += i;
}
console.log(soma);

// Escreva um loop que
// printa no console o
// seguinte padrao:
//    1
//   2 2
//  3 3 3
// 4 4 4 4

for (let i = 1; i < 5; i++) {

    let linha = '';
    for (let j = i; j < 4; j++) {
        linha += ' ';
    }
    
    for (let j = 0; j < i; j++) {
        linha += i;
        linha += ' ';
    }
    console.log(linha);
}

// Escreva um loop que calcula
// a soma dos cem primeiros 
// numeros da serie harmonica:
// 1 + 1 / 2 + 1 / 3 + ... + 1 / 100
// e printa no console a expressão.

soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += (1 / i);
}
console.log(soma);

// Escreva um loop que calcula
// a soma dos 10 primeiros termos
// da seguinte expressão:
// 1 + 11 + 111 + ... + 1111111111

soma = 0;
let item = '';

for (let i = 0; i < 10; i++) {
    item += 1;
    soma += parseInt(item);
}
console.log(soma);

// Escreva um loop que
// printa no console o
// seguinte padrão:
//     *
//    *** 
//   *****
//  *******
// ********* 
//  *******
//   *****
//    ***
//     * 

for (let i = 0; i < 9; i++) {

    let linha = '';
    // for para adicionar os espaços antes, até a quinta linha
    for (let j = i; j < 4; j++) {
        linha += ' ';
    }

    if ( i >= 5 ) {
        // for para adicionar os espaços antes, depois da quinta linha
        for (let j = 5; j > 9 - i; j--) {
            linha += ' ';
        }
    }

    if (i <= 4) {
        // for para escrever os asteriscos até a quinta linha
        for (let j = 9; j >= 9 - (i * 2); j--) {
            linha += '*';
        }
    }
    else {
        // for para escrever os asteriscos da quinta até a nona linha
        for (let j = 1; j <= 9 - (i - (9 - (i + 1))); j++) {
            linha += '*';
        }

    }
    console.log(linha);
}


// Escreva um loop que
// printa no console o
// seguinte padrão:
//       A
//     A B A 
//   A B C B A
// A B C D C B A 

const letters = 'ABCD';
for (let i = 0; i < 4; i++) {

    let linha = '';
    // for para adicionar os espaços antes
    for (let j = i; j < 4; j++) {
        linha += '  ';
    }

    // contador das letras
    let k = 0;
    // for para preencher as linhas
    for (let j = 7; j >=  7 - (i * 2); j--) {      
            linha += letters[k];
            linha += ' ';
            
            // esse if é necessário para que a linha não repita a letters, e sim coloque o restante ao contrário!
            if (k === i) {
                
                do {
                    k--;
                    // se o k for menor que 0 (undefined), não faça nada
                    if (k >= 0) {
                        linha+= letters[k];
                        linha += ' ';
                    }
                }
                while ( k > 0)
                break; // após terminar de preencher a linha com os itens ao contrário, sai do for
            } 
            else { 
                k++; 
            }
            
    }
    console.log(linha);
    
}


// Escreva um loop que
// determina o comprimento
// de uma String sem usar
// a propriedade .length
// da linguagem.
let word = 'mariana esse é meu nome';
let length = 0;

for (let letter of word) {
    length++;
}
console.log(length);

// Escreva um loop que
// reverte uma String.
// Exemplo: Ola -> alO
let str = 'Ola eu sou Mariana';
let reverseStr = [];

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr.push(str[i]);
}
reverseStr = reverseStr.join('');
console.log(reverseStr);