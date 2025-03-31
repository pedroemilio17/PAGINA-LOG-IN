function getDados() {
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
    let senhaConf = document.getElementById("senhaConf").value;

    // Verifica se as senhas coincidem
    if (senha !== senhaConf) {
        alert("As senhas não coincidem!");
        return;
    }

    // Recupera a lista de usuários do localStorage (ou cria um array vazio se não existir)
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

    // Verifica se o e-mail já está cadastrado
    let emailExistente = usuarios.some(user => user.email === email);
    if (emailExistente) {
        alert("Este e-mail já está cadastrado!");
        return;
    }

    // Adiciona o novo usuário à lista
    usuarios.push({ email: email, senha: senha });

    // Salva a lista atualizada no localStorage
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

    alert("Cadastro realizado com sucesso!");
    window.location.href = "/LOG-IN/index.html"; // Redireciona para o login
}
