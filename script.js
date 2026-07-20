function login(){

const usuario =
document.getElementById("usuario").value;

const senha =
document.getElementById("senha").value;

if(usuario === "idoso" && senha === "123"){

window.location.href = "home.html";

}else{

alert("Usuário ou senha inválidos");

}

}