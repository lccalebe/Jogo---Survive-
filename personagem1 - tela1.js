function decisao() {
    var caminho = prompt ("Decida seu caminho: \n 1 - Caminho da Esquerda: Fogo e Gritos. \n 2 - Caminho da Direita: Silencio e Escuro.");
    if (caminho == 1) {
        window.location.href = "personagem1 - tela2.html";
    }else if (caminho == 2) {
        window.location.href = "personagem1 - tela1 - GameOver.html";
    }else {
        alert("Digite uma decisão valida.")
    }
}