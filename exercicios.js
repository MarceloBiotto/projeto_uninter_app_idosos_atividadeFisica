const exercicios = [
    {
        nome: "Alongamento dos Braços",
        descricao: "Levante lentamente os braços acima da cabeça. Mantenha por 15 segundos e retorne devagar.",
        repeticoes: "10 repetições",
        series: "3 séries",
        imagem: "imagens/alongamento.jpg"
    },
    {
        nome: "Agachamento Assistido",
        descricao: "Segure em uma cadeira firme e agache lentamente.",
        repeticoes: "8 repetições",
        series: "2 séries",
        imagem: "imagens/agachamento.jpg"
    },
    {
        nome: "Elevação de Joelhos",
        descricao: "Levante um joelho de cada vez até uma altura confortável.",
        repeticoes: "12 repetições",
        series: "2 séries",
        imagem: "imagens/joelhos.jpg"
    }
];

let exercicioAtual = 0;

function carregarExercicio() {

    const ex = exercicios[exercicioAtual];

    document.getElementById("nomeExercicio").textContent = ex.nome;
    document.getElementById("descricao").textContent = ex.descricao;
    document.getElementById("repeticoes").textContent = ex.repeticoes;
    document.getElementById("series").textContent = ex.series;
    document.getElementById("imagemExercicio").src = ex.imagem;

    document.getElementById("realizado").checked = false;
}

function concluirExercicio() {

    const realizado = document.getElementById("realizado");

    if (!realizado.checked) {
        alert("Marque a caixa informando que realizou o exercício.");
        return;
    }

    exercicioAtual++;

    if (exercicioAtual < exercicios.length) {

        carregarExercicio();

    } else {

        alert("🎉 Parabéns! Você concluiu todos os exercícios de hoje.");

        // Desabilita os controles
        document.getElementById("nomeExercicio").textContent = "Treino concluído!";
        document.getElementById("descricao").textContent =
            "Você realizou todos os exercícios programados para hoje.";
        document.getElementById("repeticoes").textContent = "-";
        document.getElementById("series").textContent = "-";
        document.getElementById("imagemExercicio").style.display = "none";
        document.getElementById("realizado").disabled = true;

        const botao = document.querySelector("button");
        botao.disabled = true;
        botao.textContent = "Exercícios Finalizados";
    }
}



function registrarDesconforto(){

    const desconforto =
    document.getElementById("desconforto").value;

    const observacao =
    document.getElementById("observacao").value;

    if(desconforto === ""){

        alert("Selecione uma opção.");

        return;

    }

    if(desconforto === "Não"){

        alert("Ótimo! Continue seguindo as orientações dos exercícios.");

    }else{

        alert(
            "Registro salvo.\n\nCaso o desconforto permaneça, interrompa os exercícios e procure orientação de um profissional de saúde."
        );

    }

    console.log("Desconforto:", desconforto);
    console.log("Observação:", observacao);

}


function encerrarTreino(){

    const confirmar =
    confirm("Deseja realmente encerrar o treino?");

    if(confirmar){

        alert("Treino encerrado.\nAté a próxima!");

        window.location.href = "index.html";

    }

}
window.onload = carregarExercicio;