function logar() {
    let email = document.getElementById("exampleInputEmail1");
    let senha = document.getElementById("exampleInputPassword1");

    console.log(email.value + senha.value);

    if(email.value == "admin@admin.com" && senha.value == "admin"){
        localStorage.setItem("acesso", true);

        alert("Usuário autenticado!");

        window.location.href = "index.html";

    }else{
        alert("Usuario ou senha inválidos");
    }
}