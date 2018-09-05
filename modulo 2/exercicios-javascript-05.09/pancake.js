const { isSorted } = require('./_helpers')

// Esta funcao recebe uma lista
// e organiza essa lista usando
// o "Pancake Sort".
function pancakeSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let largest = -Infinity
		let largest_index
		for (let j = i; j < arr.length; j++) {
			if (arr[j] > largest) {
				largest = arr[j]
				largest_index = j
			}
		}

		let flipped = arr
			.slice(largest_index)
			.reverse()

		let newly_sorted = arr
			.slice(i, largest_index)
			.concat(flipped)
			.reverse()

		arr = arr
			.slice(0, i)
			.concat(newly_sorted)
			
		if (isSorted(arr.slice().reverse())) break
	}

	return arr
}

exports = module.exports = pancakeSort