const { isSorted } = require('./_helpers')

// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Bubble Sort".
function bubbleSort(arr) {

	while(!isSorted(arr)) /*Enquanto a função isSorted retornar false*/ {

		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) { /* Se o valor do indice anterior for maior que o valor do indice atual */

				const aux = arr[i]; /*const aux recebe o valor do indice atual*/
				arr[i] = arr[i - 1]; /* o indice atual recebe o valor do indice anterior, que é maior */
				arr[i - 1] = aux; /* o indice anterior recebe o valor de aux, que guardou o valor do indice atual, que é menor */
			}
		}

	}
	
	return arr;
}

/* Segunda forma, sem a função isSorted. A função é menos semântica, mas mais eficiente. Pode ser usada quando a lista
possuir milhares de itens.

function bubbleSort(arr) {
	let isSorted = false;

	while(!isSorted) {
		isSorted = true;

		for (let i = 1; i < arr.length; i++) {
			if (arr[i - 1] > arr[i]) {
				isSorted = false;

				const aux = arr[i];
				arr[i] = arr[i - 1];
				arr[i - 1] = aux;
			} 
		}

	}

	return arr;
}

*/

exports = module.exports = bubbleSort