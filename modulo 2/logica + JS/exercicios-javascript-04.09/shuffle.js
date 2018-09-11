function arraysAreEqual(arr1, arr2) {
    if( arr1.length !== arr2.length) {
        return false;
    }

    let count = 0;
    for(let i = 0, length = arr1.length; i < length; i++){
        if(arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

function shufflePerfeito(lista) {
    if(lista.length % 2 !== 0) {
        throw 'A lista deve ter um número par de elementos';
    }

    const metade = lista.length / 2;
    let esquerda = lista.slice(0, metade);
    let direita = lista.slice(metade, lista.length);

    let listaEmbaralhada = [];

    while(arraysAreEqual(lista, listaEmbaralhada) === false) {

        listaEmbaralhada = [];

        for(let i = 0; i < metade; i++){
            listaEmbaralhada.push(esquerda[i], direita[i]);
        }
        
        esquerda = listaEmbaralhada.slice(0, metade);
        direita = listaEmbaralhada.slice(metade, lista.length);

    }

    console.log(listaEmbaralhada, lista);

}