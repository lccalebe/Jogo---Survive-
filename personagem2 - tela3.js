function decisao() {
    var caminho = prompt ("Decida : \n 1 - Fugir \n 2 - Lutar");
    if (caminho == 1) {
        window.location.href = "personagem2 - tela3 - GameOver.html";
    }else if (caminho == 2) {
        window.location.href = "personagem2 - Final.html";
    }else {
        alert("Digite uma decisão valida.")
    }
}