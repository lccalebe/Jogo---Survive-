function decisao() {
    var caminho = prompt ("Decida : \n 1 - Tentar lutar \n 2 - Fugir");
    if (caminho == 1) {
        window.location.href = "personagem1 - tela3 - GameOver.html";
    }else if (caminho == 2) {
        window.location.href = "personagem1 - Final.html";
    }else {
        alert("Digite uma decisão valida.")
    }
}