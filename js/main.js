var logado = false;

if(localStorage.getItem("acesso") == true) {
    logado = true
    console.log("entrou!")
}
if(logado != false){
    alert("Você não está autenticado")
    window.location.href="login.html"
}