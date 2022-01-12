function decisao() {
    var caminho = prompt ("Decida seu caminho: \n 1 - Pegar o elevador. \n 2 - Ir de escada.");
    if (caminho == 1) {
        window.location.href = "personagem2 - tela3.html";
    }else if (caminho == 2) {
        window.location.href = "personagem2 - tela2 - GameOver.html";
    }else {
        alert("Digite uma decisão valida.")
    }
}