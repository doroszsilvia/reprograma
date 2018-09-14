// Escreva uma função
// em Javascript que recebe
// um nome, um pronome e um objeto
// e retorna "<nome> foi caminhar
// no parque. <pronome> encontrou
// <objeto>. <nome> decidiu levar
// <objeto> pra casa."
function frase(nome, pronome, objeto) {
    return `${nome} foi caminhar no parque. ${pronome} encontrou ${objeto}. ${nome} decidiu levar ${objeto} pra casa. \n`;
}
console.log(frase('Harry', 'ele', 'varinha'));

// Escreva uma função
// em Javascript que recebe
// um número qualquer e retorna
// a raiz quadrada dele.

function raizQuadrada(numero) {
    if (numero < 0) throw 'Não existe raiz quadrada de número negativo!' 
    if (typeof numero !== 'number') throw 'Por favor, insira um número.'
    return Math.sqrt(numero);
    // return num ** (1/2) ==> ** significa elevado a
}
console.log(`A raiz quadrada de 64 é ${raizQuadrada(64)} \n`);


// Escreva uma função em
// Javascript que recebe um
// número qualquer e retorna
// a representação binaria dele.
function toBinary(numero) {
    if (numero !== Math.floor(numero)) throw 'Entre com um número inteiro.';
    if (numero < 0) throw 'Entre com um número positivo';

    let binaryNumber = '';
    while(numero > 0) {
        binaryNumber += `${numero % 2}`;
        numero = Math.floor(numero / 2);
    }
    return binaryNumber.split('').reverse('').join('');

    //return numero.toString(2);
}
console.log(`O número 43 em binário é ${toBinary(43)} \n`);

// result = 43 % 2 = 1; numero = 21.5
// result = 21 % 2 = 1; numero = 10.75
// result = 10 % 2 = 0; numero = 5.375
// result = 5 % 2 = 1; 

// Escreva uma função em Javascript
// que recebe uma lista de números
// e retorna o maior número da lista.

function greatherNumber(arr) {
    // typeof Array retorna function pq o Array é uma function (let x = new Array());
    if (typeof arr !== 'object') throw 'Por favor, forneça uma lista'

    let greather = -Infinity;
    arr.forEach( item => {
        if (typeof item !== 'number') throw 'Por favor, forneça uma lista apenas de números'
        if (item > greather) greather = item;
    });
    return greather;
}

console.log(`O maior número do array [2,5,32,7,9,14] é ${greatherNumber([2,5,32,7,9,14])} \n`);

// Escreva uma função em Javascript
// que vai checar se duas ou mais strings
// sao anagramas umas das outras.

function isAngram() {
    let argLength = arguments.length;
    if (argLength < 2) throw 'Você precisa fornecer pelo menos duas palavras' 

    /* Validação do argumento */
    for (let i = 1; i < argLength; i++) {
        if (typeof arguments[i] != 'string') throw 'Por favor, forneça uma palavra';
        if (arguments[i].length !== arguments[i - 1].length) return false;
    }

    for (let i = 1; i < argLength; i++) {
        for (let letra of arguments[i]) {
            if ( !arguments[i - 1].includes(letra) ) return false;
        }
    }
    return true;
}

//ou...

function isAngram() {
    let argLength = arguments.length;

    for (let i = 0; i < argLength; i++) {
        arguments[i] = arguments[i].split('').sort().join('');
    }

    for (let i = 1; i < argLength; i++) {
        if (arguments[i] !== arguments[i - 1]) return false;
    }
    return true;
}
console.log('As palavras amor e roma são angramas?', isAngram('amor', 'roma'), '\n');

// Escreva uma função em Javascript
// que recebe o raio de um circulo
// e calcula o diametro, a circunferencia
// e a area dele.

function calculateCircle(raio) {

    let diametro = raio * 2;
    let circunferencia = Math.PI * diametro;
    let area = Math.PI * Math.pow(raio, 2);

    return `O círculo com raio ${raio} possui diâmetro ${diametro}, circunferência ${circunferencia.toFixed(1)} e área ${area.toFixed(1)}`
}
console.log( calculateCircle(8) );