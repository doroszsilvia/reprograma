// hello("what") -> Hello, world!
// hello() -> Hello, world!
function hello() {
	return "Hello, world!"
}

// show(4) -> 4 * 4 = 16
// show(-4) -> (-4) * (-4) = 16
function show(x) {
	console.log(`${x} ${x * x}`)
	return x * x
	console.log(`${x} ${x * x * x}`)
	return x * x * x
}

console.log(eq3()) //-> 1
console.log(eq3(1, 2, 3)) // -> 0
console.log(eq3("1", 1, 3)) // -> 0
console.log(eq3("!", "a", "b")) // -> 0
console.log(eq3("!", "!", !)) // -> Retorna erro de sintaxe)
function eq3(a, b, c) {
	if (a === b && a === c) {
		return 1
	} else {
		return 0
	}
}

// Resultado: sum(7) ==> 9;  sum( sum(7) ) ==> sum ( 9 ) ==> 9, 11
function sum(x) {
	return x + 2
}
const x = 5
console.log(`${sum(x + 2)}, ${sum(sum(x + 2))}`)

// Resultado:
function confusion(x, y) {
	x = 2 * x + y
	return x
}
let x = 2
let y = 5
y = confusion(y, x) // confusion(5, 2) ==> y = 12
x = confusion(y, x) // confusion(12, 2) ==> x = 26
console.log(`${x}, ${y}`) // 26, 12