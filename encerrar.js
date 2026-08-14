function carregarUsuario() {

    const usuario = localStorage.getItem("usuarioLogado");

    if (usuario) {

        document.getElementById("saudacao").textContent =
            `Olá, ${usuario}!`;

    }

}


function enviarWhatsApp() {

    const desconforto =
        document.getElementById("desconforto").value;

    const observacao =
        document.getElementById("observacao").value.trim();

    const usuario =
        localStorage.getItem("usuarioLogado");

    if (desconforto === "") {

        alert("Por favor, informe como você se sentiu durante o treino.");

        return;

    }

    const nomeUsuario = usuario || "Usuário";

    const mensagem =

        `Resumo do treino\n\n` +

        `Usuário: ${nomeUsuario}\n\n` +

        `Como se sentiu: ${desconforto}\n\n` +

        `Observação: ${observacao || "Nenhuma observação informada."}`;

    const numeroWhatsApp = "5551994431930";

    const url =
        `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, "_blank");

}


function finalizar() {

    alert(
        "Treino finalizado com sucesso!\n\nObrigado por realizar os exercícios."
    );

    window.location.href = "index.html";

}


window.onload = carregarUsuario;