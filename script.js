function login() {

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    if (
        (usuario.toLowerCase() === "lenine" && senha === "123") ||
        (usuario.toLowerCase() === "dulce" && senha === "123")
    ) {

        window.location.href = "exercicios.html";

    } else {

        alert("Usuário ou senha inválidos.");

    }

}