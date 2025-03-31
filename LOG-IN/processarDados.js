function getEmailSenha(){
    //Recebe os valores
    let emailLog = document.getElementById("email")
    let senhaLog = document.getElementById("senha")
    let senhaLogDado = senhaLog.value
    let emailLogDado = emailLog.value

    //pega do localStorage
    let emailSign = localStorage.getItem("email")
    let senhaSign = localStorage.getItem("senha")
    
    let email = false

    //Confirma
    if(emailLogDado == emailSign && senhaLogDado == senhaSign){
        alert("Você fez Log-in")
    }else{
        alert("Email ou senha incorretos")
    }
}
