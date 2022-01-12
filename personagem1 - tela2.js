function decisao() {
    var caminho = prompt ("Decida seu caminho: \n 1 - Tentar destrancar a porta \n 2 - Pular no buraco mesmo sem ver o fundo.");
    if (caminho == 1) {
        window.location.href = "personagem1 - tela3.html";
    }else if (caminho == 2) {
        window.location.href = "personagem1 - tela2 - GameOver.html";
    }else {
        alert("Digite uma decisão valida.")
    }
}