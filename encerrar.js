function finalizar(){

    const desconforto =
    document.getElementById("desconforto").value;

    const observacao =
    document.getElementById("observacao").value;

    console.log(desconforto);
    console.log(observacao);

    alert(
        "Obrigado!\nSeu treino foi registrado."
    );

    window.location.href = "index.html";

}