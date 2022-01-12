function decisao() {
    var caminho = prompt ("Decida seu caminho: \n 1 - Subir no telhado \n 2 - Pegar carro");
    if (caminho == 1) {
        window.location.href = "personagem2 - tela2.html";
    }else if (caminho == 2) {
        window.location.href = "personagem2 - tela1 - GameOver.html";
    }else {
        alert("Digite uma decisão valida.")
    }
}