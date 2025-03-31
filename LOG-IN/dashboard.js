function verificarLogin() {
    let usuarioLogado = JSON.parse(sessionStorage.getItem("usuarioLogado"));

    if (!usuarioLogado) {
        alert("Você precisa estar logado para acessar esta página!");
        window.location.href = "/LOG-IN/index.html";
    }
}

// Chama a função assim que a página carregar
window.onload = verificarLogin;
