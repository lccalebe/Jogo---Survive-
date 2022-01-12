function decisao() {
    var caminho = prompt ("Decida seu caminho: \n 1 - Ir embora \n 2 - Procurar criatura.");
    if (caminho == 1) {
        window.location.href = "personagem3 - tela3.html";
    }else if (caminho == 2) {
        window.location.href = "personagem3 - tela2 - GameOver.html";
    }else {
        alert("Digite uma decisão valida.")
    }
}