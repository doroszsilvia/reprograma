function newLine(linhas) {

    let proximaLinha = [1];

    for(let i = 1; i < linhas.length; i++) {
        proximaLinha.push(linhas[i] + linhas[i - 1]);
    }

    proximaLinha.push(1);
    return proximaLinha;
}

function pascalTriangle(numeroLinhas) {
    if(numeroLinhas < 1) {
        throw 'O triângulo precisa ter pelo menos 1 linha';
    }

    let triangle = [ [1] ]; //Um array dentro de outro array

    for(let i = 1; i < numeroLinhas; i++) {
        triangle.push(newLine( triangle[triangle.length - 1] ));
    }
    
    console.log(triangle);
}