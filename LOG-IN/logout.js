function logout() {
    sessionStorage.removeItem("usuarioLogado");
    alert("Você saiu da conta.");
    window.location.href = "/LOG-IN/index.html";
}