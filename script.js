function login() {

    const usuario = document.getElementById("usuario").value.trim();
    const senha = document.getElementById("senha").value;

    if (
        (usuario.toLowerCase() === "lenine" && senha === "123") ||
        (usuario.toLowerCase() === "dulce" && senha === "123")
    ) {

        // Salva o nome do usuário
        localStorage.setItem("usuarioLogado", usuario);

        window.location.href = "exercicios.html";

    } else {

        alert("Usuário ou senha inválidos.");

    }

}

localStorage.setItem("usuarioLogado", usuario);