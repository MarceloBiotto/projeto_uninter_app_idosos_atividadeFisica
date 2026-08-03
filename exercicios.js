const exercicios = [

    {
        nome: "Alongamento dos Braços",

        descricao: "Levante lentamente os braços acima da cabeça e mantenha a posição por 15 segundos.",

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
function atualizarProgresso(){

    const total = exercicios.length;

    const atual = exercicioAtual + 1;

    const porcentagem = (exercicioAtual / total) * 100;

    document.getElementById("progressoTexto").textContent =
        `Exercício ${atual} de ${total}`;

    document.getElementById("progresso").style.width =
        porcentagem + "%";

}
function carregarExercicio() {

    const ex = exercicios[exercicioAtual];

    document.getElementById("nomeExercicio").textContent = ex.nome;

    document.getElementById("descricao").textContent = ex.descricao;

    document.getElementById("repeticoes").textContent = ex.repeticoes;

    document.getElementById("series").textContent = ex.series;

    document.getElementById("imagemExercicio").src = ex.imagem;

    document.getElementById("imagemExercicio").style.display = "block";

    document.getElementById("realizado").checked = false;
    atualizarProgresso();
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

        window.location.href = "encerrar.html";

    }

}

function encerrarTreino() {

    const confirmar = confirm("Deseja realmente encerrar o treino?");

    if (confirmar) {

        window.location.href = "encerrar.html";

    }

}

window.onload = carregarExercicio;