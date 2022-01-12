function decisao() {
    var caminho = prompt ("Decida : \n 1 - Destruir Criatura \n 2 - Levar para o Hospital");
    if (caminho == 1) {
        window.location.href = "personagem3 - tela3 - GameOver.html";
    }else if (caminho == 2) {
        window.location.href = "personagem3 - Final.html";
    }else {
        alert("Digite uma decisão valida.")
    }
}