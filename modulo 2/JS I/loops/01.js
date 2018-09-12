// Escreva um loop um Javascript
// que vai calcular a soma de todos
// os números entre 0 e 300.

let soma = 0;
for (let i = 0; i <= 300; i++) {
    soma += i;
}
console.log(soma);


// Escreva um loop em Javascript
// que vai calcular a seguinte soma:
// 1 * 1 + 2 * 2 + 3 * 3 + ... + 400 * 400

soma = 0;
for (let i = 1; i <= 400; i++) {
    soma += i * i;
    //soma += Math.pow(i, 2);
    //soma += i ** 2;
}
console.log(soma);

// Escreva um loop em Javascript
// que vai calcular a seguinte soma:
// 1 * 2 + 2 * 3 + 3 * 4 + ... + 249 * 250

soma = 0;
for (let i = 2; i <= 250; i++) {
    soma += (i - 1) * i;
}
console.log(soma);


// Escreva um loop em Javascript que
// vai calcular 10! (10 fatorial), o
// que significa 10 * 9 * 8 * 7 ... * 1.

let fatorial = 10;
for (let i = 9; i >= 1; i--) {
    fatorial = fatorial * i;
}
console.log(fatorial);

// Escreva um loop em Javascript que 
// calcula quantos termos a soma
// 1 + 2 + 3 + ... precisa para
// que o resultado dela exceda um milhão.

soma = 0;
let contador = 0;

while( soma <= 1000001) {
    contador++;
    soma += contador;
}
console.log(contador, soma);

// Escreva um loop em Javascript que
// simule o problema 3x + 1.
// ref: https://pt.wikipedia.org/wiki/Conjectura_de_Collatz
// "Esta conjectura aplica-se a qualquer 
// número natural não nulo, e diz-nos para, 
// se este número for par, o dividir 
// por 2 (/2), e se for impar, para 
// multiplicar por 3 e adicionar 1 (*3+1).
// Desta forma, por exemplo, se a sequência 
// iniciar com o número 5 ter-se-á: 5; 16; 8; 4; 2; 1".

let numero = 5;

while (numero > 1 ) {
    console.log(numero);
    if(numero % 2 === 0) {
        numero /= 2;
    }
    else {
        numero = 3 * numero + 1;
    }
}

// Escreva um loop em Javascript
// que gera uma lista com 100
// número randomicos.
let randomArr = [];
for (let i = 0; i < 100; i++) {
    randomArr.push( Math.floor(Math.random() * 200) );
}
console.log(randomArr);

// Escreva um loop em Javascript
// que "lance uma moeda" a cada 
// nova iteração. Considere 1 = cara,
// 0 = coroa. Rode esse loop 1000 vezes e
// printe o numero de caras e o numero
// de coroas no console.
let cara = 0;
let coroa = 0;
for (let i = 0; i < 1000; i++) {
    Math.floor( Math.random() * 2) === 0 ? coroa++ : cara++;
}
console.log('O número de caras foi:', cara);
console.log('O número de coroas foi:', coroa);