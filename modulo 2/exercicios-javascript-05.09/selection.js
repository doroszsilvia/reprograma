// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Selection Sort".
function selectionSort(arr) {
	let sorted = []

	while (arr.length > 0) { /* Executar bloco enquanto o comprimento do arr ser maior que 0 */
		let lowest = Infinity; /* Infinity significa um número positivo infinito. Qualquer número é menor que o Infinity */
		let lowest_index;

		for (const [index, item] of arr.entries()) { /* O arr.entries retorna um objeto Array Interator, que é formado por pares de index e item de cada posição do array */

			if (item < lowest) {
				lowest = item; /* lowest deixa de ser Infinity, para ser um valor do array */
				lowest_index = index; /* Recebe o indíce do menor valor */
			}
		}

		sorted.push(lowest); /* Irá dar um push no sorted com o menor valor encontrado pelo for */
		arr.splice(lowest_index, 1);
		/* O splice irá tirar do arr o menor valor, para não entrar em loop.
			arr.splice(indíce do começo do que será retirado, quantidade de elementos retirados)
		*/
	}

	return sorted;
}

selectionSort([6, 3, 4, 9, 1, 2]);

exports = module.exports = selectionSort;