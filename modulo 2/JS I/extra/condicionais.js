// Escreva uma condicional que
// verifica se dois numeros 
// são iguais.
let number1 = 10;
let number2 = 10;
number1 === number2 ? console.log(`Os números ${number1} e ${number2} são iguais`) : console.log(`Os números ${number1} e ${number2} não são iguais`);

// Escreva uma condicional que
// verifica se um ano é bissexto
// ou não.

//São bissextos todos os anos múltiplos de 400.
//São bissextos todos os múltiplos de 4,
//exceto se for múltiplo de 100 mas não de 400.
//Não são bissextos todos os demais anos.

let year = 2008;
if ( (year % 400 === 0) || (year % 4 === 0 && !(year % 100 === 0 && year % 400 !== 0 ) ) ) {
    console.log(`O ano ${year} é bissexto!`);
}
else {
    console.log(`O ano ${year} não é bissexto!`);
}

// Escreva uma condicional que
// recebe duas coordenadas e 
// verifica se aquele ponto
// esta no primeiro, segundo,
// terceiro ou quarto quadrante 
// do plano cartesiano.
let eixoX = 1;
let eixoY = -3;

if (eixoX > 0 && eixoY > 0) {
    console.log(`O eixo x ${eixoX} e o eixo y ${eixoY} está no primeiro quadrante`);
}
else if (eixoX < 0 && eixoY < 0) {
    console.log(`O eixo x ${eixoX} e o eixo y ${eixoY} está no terceiro quadrante`);
}
else if (eixoX > 0 && eixoY < 0) {
    console.log(`O eixo x ${eixoX} e o eixo y ${eixoY} está no quarto quadrante`);
}
else {
    console.log(`O eixo x ${eixoX} e o eixo y ${eixoY} está no segundo quadrante`);
}

// Escreva uma condicional que 
// recebe as medidas de um triangulo
// e determina se ele é isosceles,
// equilatero ou escaleno.
let ladoA = 2;
let ladoB = 2;
let ladoC = 2;

if (ladoA === ladoB && ladoB === ladoC) {
    console.log ('É um triângulo equilátero!');
}
else if ( (ladoA === ladoB && ladoB !== ladoC) || (ladoB === ladoC && ladoC !== ladoA) || (ladoC === ladoA && ladoA !== ladoB)) {
    console.log ('É um triângulo isósceles!');
}
else {
    console.log ('É um triângulo escaleno!');
}

// Escreva uma condicional que recebe
// um caractere e determina se esse
// caractere é uma vogal ou não.
const vogais = 'aeiou';
let char = 'i';

if (vogais.includes(char)) {
    console.log(`A letra ${char} é vogal!`)
}
else {
    console.log(`A letra ${char} não é vogal!`)
}