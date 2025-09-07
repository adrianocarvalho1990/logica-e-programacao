function somaDoisValores(valor1, valor2) {
    const resultado = valor1 + valor2;
    return resultado
}

function calcularMediaDeDoisValores(valor1, valor) {
    const resultadoSomaDoisValores = somaDoisValores (valor1, valor2);
    const resultadoMediaDoisValores = resultadoSomaDoisValores / 2;
    return resultadoMediaDoisValores;
}

module.exports = {
    somaDoisValores
}