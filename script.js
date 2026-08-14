function login() {

    const usuario =
        document.getElementById("usuario").value.trim();

    const senha =
        document.getElementById("senha").value;

    if (
        (usuario.toLowerCase() === "lenine" && senha === "123") ||
        (usuario.toLowerCase() === "dulce" && senha === "123") ||
        (usuario.toLowerCase() === "vanessa" && senha === "123") ||
        (usuario.toLowerCase() === "geral" && senha === "123")
    ) {

        localStorage.setItem(
            "usuarioLogado",
            usuario
        );

        window.location.href =
            "exercicios.html";

    } else {

        alert("Usuário ou senha inválidos.");

    }

}


function solicitarAcesso() {

    const mensagem =
        "Olá! Gostaria de solicitar acesso ao aplicativo de exercícios físicos.";

    const numeroWhatsApp =
        "5551994431930";

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

}