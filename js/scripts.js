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
        //conectivo "e" usa && e conectivo "ou" usa ||
        if(kit >= 97 && suplemento >= 49){
            soma = soma + 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15);
        } 
        else if (kit >= 78 && suplemento >= 39){
            soma = soma + 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15);
        }
        else if (kit >= 49 && suplemento >= 25){
            soma = soma + 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15);
        }
        else if (kit >= 19 && suplemento >= 10){
            soma = soma + 1000 + ((kit - 19) * 30) + ((suplemento - 10) * 15);
        } else {
            soma = soma
        }
        
    }
    document.getElementById('resultado-soma').innerHTML = `Resultado: ${soma} pontos`;
}
