function calcular() {
    let inputMascote = parseInt(document.getElementById('mascote').value);
    let inputAtleta = parseInt(document.getElementById('homenagem').value);
    let inputLeite = parseInt(document.getElementById('leite').value);
    let inputKitAvulso = parseInt(document.getElementById('kit-avulso').value);
    let inputSuplmenteAvulso = parseInt(document.getElementById('suplemento-avulso').value);
    let soma = inputMascote + inputAtleta + (2*inputLeite) + (30*inputKitAvulso) + (15*inputSuplmenteAvulso);
    let mostrarSoma = document.getElementById('resultado-soma');
    mostrarSoma.innerHTML = `Resultado: ${soma} pontos`;
}

function reiniciar() {
}