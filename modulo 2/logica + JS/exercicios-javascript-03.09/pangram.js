/* Usando a primeira forma: */

function isParagram ( frase ) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    
    frase = frase.toLowerCase();
    
	for (var letter of alphabet) {
		return frase.indexOf(letter) === -1 ? 'não' : 'sim';
    }
}
/*
Usando a segunda forma: 

function isParagram ( frase ) {
	if(frase.length < 26) {
		return 'não';
    }
    
    frase = frase.toLowerCase().split('');

    frase = frase.filter(function(index, position){
		return frase.indexOf(index) === position && index !== ' ' && index !== ',';
    });

    if( frase.length < 26){
		return 'não';
    }
	return 'sim';
}
*/

isParagram ( 'TV faz quengo explodir com whisky JB');
isParagram ( 'Quem traz CD, LP, fax, engov e whisky JB');