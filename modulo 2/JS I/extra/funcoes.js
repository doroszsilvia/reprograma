// Escreva uma funcao
// que recebe um número
// decimal e o transforma
// em hexadecimal. Não
// use a funcao .toString().
function decToHex(num) {
    let divisionResult = [];
    const hexaElements = {
        10: 'A',
        11: 'B',
        12: 'C',
        13: 'D',
        14: 'E',
        15: 'F'
    };

    do {
        divisionResult.push( Math.floor(num % 16) );
        num = num / 16;
    } 
    while(parseInt(num) >= 16)
    divisionResult.push( Math.floor(num) );

    divisionResult = divisionResult.map( (item, index) => {
        if (item >= 10) divisionResult[index] = hexaElements[item];
        else divisionResult[index] = divisionResult[index];

        return divisionResult[index];
    });
    
    return divisionResult.reverse().join('');

}

// Escreva uma funcao que 
// recebe uma quantidade n
// e retorna os n primeiros
// numeros da sequencia de
// Fibonacci.
function fibonacciSequence(num) {
    let sequence = [1, 1];
    for(let i = 2; i < num; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence.join();
}

// Escreva uma funcao que
// receve dois numeros e retorna
// o minimo multiplo comum
// entre eles.
function mmc(num1, num2) {
    let multiple = [2, 3, 5, 7];
    let count = 0;
    let mmcNumber = 1;

    while ( (num1 !== 1 || num2 !== 1) ) {

        if (num1 % multiple[count] === 0 && num2 % multiple[count] === 0) { 
            num1 /= multiple[count];
            num2 /= multiple[count];
            mmcNumber *= multiple[count]; 
        }
        else if (num1 % multiple[count] === 0) { 
            num1 /= multiple[count] 
            mmcNumber *= multiple[count]; 
        }
        else if (num2 % multiple[count] === 0) { 
            num2 /= multiple[count];
            mmcNumber *= multiple[count];
        }
        else {
            count++;
        }
    }
    return mmcNumber;
}

// Escreva uma funcao que
// recebe uma quantidade n
// e printa no console
// n numero de linhas do
// seguinte padrao:
//
// 		1234567654321                                                                                            
//       12345654321                                                                                             
//        123454321                                                                                              
//         1234321                                                                                               
//          12321                                                                                                
//           121                                                                                                 
//            1 

function crazyPattern(num) {

}


// Escreva um funcao que
// recebe um numero e retorna
// true se ele for primo e false
// se nao.




// Escreva uma funcao que
// calcula a soma de todos
// os elementos em um array.




// Escreva uma funcao que
// recebe um array e um
// elemento e determina
// se o array inclui esse
// elemento. Não use o metodo
// .includes dos arrays.




// Escreva uma funcao que
// recebe duas ou mais arrays 
// e retorna true se elas
// forem exatamente iguais.




// Escreva uma funcao
// que recebe dois ou mais
// objetos e retorna true se
// eles forem exatamente iguais.




// Escreva uma funcao que
// recebe duas arrays e retorna
// uma terceira array com
// todos os elementos da 
// primeira array que nao
// estao presentes na segunda.




// Escreva um funcao que
// recebe um objeto e retorna
// um array com todas as chaves
// desse objeto. Não use a funcao
// Object.keys().