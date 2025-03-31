function login() {
    const email = document.getElementById("email").value.trim();
    const senha = document.getElementById("senha").value.trim();

    // Validação de entrada
    if (!email || !senha) {
        displayError("Por favor, preencha todos os campos.");
        return;
    }

    // Recupera os usuários cadastrados
    let usuarios;
    try {
        usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    } catch (error) {
        console.error("Erro ao acessar o localStorage:", error);
        displayError("Erro ao acessar os dados. Tente novamente mais tarde.");
        return;
    }

    // Procura um usuário que corresponda ao e-mail e senha digitados
    const usuarioEncontrado = usuarios.find(user => user.email === email && user.senha === senha);

    if (usuarioEncontrado) {
        // Salva o usuário logado na sessão
        sessionStorage.setItem("usuarioLogado", JSON.stringify(usuarioEncontrado));
        alert("Login bem-sucedido!");
        window.location.href = "/dashboard/index.html"; // Redireciona para a área logada
    } else {
        displayError("E-mail ou senha incorretos!");
    }
}

function displayError(message) {
    const errorElement = document.getElementById("error-message");
    errorElement.textContent = message;
    errorElement.style.display = "block"; // Exibe a mensagem de erro
}

function logout() {
    sessionStorage.removeItem("usuarioLogado");
    alert("Você saiu com sucesso!");
    // Optionally redirect to login page
    window.location.href = "/login.html"; // Adjust the path as necessary
}

window.onload = function() {
    // Optional: Any initialization code can go here
};