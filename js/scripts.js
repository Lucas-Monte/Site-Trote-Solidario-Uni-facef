function calcular() {
    let mascote, atleta, leite, kit, suplemento, soma, equipe;

    mascote = parseInt(document.getElementById('mascote').value);
    atleta = parseInt(document.getElementById('homenagem').value);
    leite = parseInt(document.getElementById('leite').value);
    kit = parseInt(document.getElementById('kit').value);
    suplemento = parseInt(document.getElementById('suplemento').value);
    soma = mascote + atleta + (2*leite);
    equipe = document.getElementById("equipe").value;
    if (equipe == "laranja"){
        if(kit >= 97){
            soma = soma + 5000 + ((kit - 97) * 30);
        } 
        else if (kit >= 78){
            soma = soma + 4000 + ((kit - 78) * 30);
        }
        else if (kit >= 49){
            soma = soma + 2500 + ((kit - 49) * 30);
        }
        else if (kit >= 19){
            soma = soma + 1000 + ((kit - 19) * 30);
        } else {
            soma = soma
        }
        
    }
    document.getElementById('resultado-soma').innerHTML = `Resultado: ${soma} pontos`;
}
