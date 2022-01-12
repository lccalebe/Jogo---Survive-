function decisao() {
    var caminho = prompt ("Decida seu caminho: \n 1 - Carro \n 2 - Moto");
    if (caminho == 1) {
        window.location.href = "personagem3 - tela2.html";
    }else if (caminho == 2) {
        window.location.href = "personagem3 - tela1 - GameOver.html";
    }else {
        alert("Digite uma decisão valida.")
    }
}