function getDados(){
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");
    let senhaConf = document.getElementById("senhaConf");

    let emailDado = email.value;
    let senhaDado = senha.value;
    let senhaConfDado = senhaConf.value;

    // Verificar se as senhas coincidem
    if(senhaDado === senhaConfDado){
        // Armazenar os dados no localStorage
        localStorage.setItem('email', emailDado);
        localStorage.setItem('senha', senhaDado);
        localStorage.setItem('senhaConf', senhaConfDado);

        // Redirecionar para a página de login
        window.location.href = "/LOG-IN/index.html";
    } else {
        // Exibir mensagem de erro
        alert("As senhas não coincidem!");
    }
}