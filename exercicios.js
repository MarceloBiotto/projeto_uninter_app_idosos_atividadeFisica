const exercicios = [

    {
        nome: "Alongamento dos Braços",

        descricao: "Levante lentamente os braços acima da cabeça e mantenha a posição por 15 segundos.",

        repeticoes: "10 repetições",

        series: "3 séries",

        imagem: "imagens/alongamentoBraco.png"
    },

    {
        nome: "Agachamento Assistido",

        descricao: "Segure em uma cadeira firme e agache lentamente.",

        repeticoes: "8 repetições",

        series: "2 séries",

        imagem: "imagens/agachamentoAssistido.png"
    },

    {
        nome: "Elevação de Joelhos",

        descricao: "Levante um joelho de cada vez até uma altura confortável.",

        repeticoes: "12 repetições",

        series: "2 séries",

        imagem: "imagens/elevacaoJoelhos.png"
    },

    {
        nome: "Elevação de Calcanhares",

        descricao: "Fique em pé segurando o encosto de uma cadeira firme. Eleve lentamente os calcanhares, ficando na ponta dos pés. Mantenha a posição por alguns segundos e desça devagar.",

        repeticoes: "12 a 15 repetições",

        series: "2 a 3 séries",

        imagem: "imagens/elevacaoCalcanhares.png"
    },

    {
        nome: "Rotação de Ombros",

        descricao: "Sente-se ou fique em pé com a coluna reta. Coloque as mãos sobre os ombros e faça movimentos circulares lentos com os cotovelos para trás e depois para frente.",

        repeticoes: "10 a 12 repetições para cada direção",

        series: "2 a 3 séries",

        imagem: "imagens/rotacaoOmbros.png"
    }

];

let exercicioAtual = 0;


function atualizarProgresso() {

    const total = exercicios.length;

    const atual = exercicioAtual + 1;

    const porcentagem = (exercicioAtual / total) * 100;

    document.getElementById("progressoTexto").textContent =
        `Exercício ${atual} de ${total}`;

    document.getElementById("progresso").style.width =
        porcentagem + "%";

}


function carregarExercicio() {

    const usuario = localStorage.getItem("usuarioLogado");

    if (usuario) {

        document.getElementById("saudacao").textContent =
            `Olá, ${usuario}!`;

    }

    const ex = exercicios[exercicioAtual];

    document.getElementById("nomeExercicio").textContent =
        ex.nome;

    document.getElementById("descricao").textContent =
        ex.descricao;

    document.getElementById("repeticoes").textContent =
        ex.repeticoes;

    document.getElementById("series").textContent =
        ex.series;

    document.getElementById("imagemExercicio").src =
        ex.imagem;

    document.getElementById("imagemExercicio").style.display =
        "block";

    document.getElementById("realizado").checked =
        false;

    atualizarProgresso();

    // Volta para o topo da página
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


function concluirExercicio() {

    const realizado =
        document.getElementById("realizado");

    if (!realizado.checked) {

        alert(
            "Marque a caixa informando que realizou o exercício."
        );

        return;

    }

    exercicioAtual++;

    if (exercicioAtual < exercicios.length) {

        carregarExercicio();

    } else {

        // Completa a barra de progresso
        document.getElementById("progresso").style.width =
            "100%";

        document.getElementById("progressoTexto").textContent =
            "Todos os exercícios concluídos!";

        setTimeout(() => {

            window.location.href =
                "encerrar.html";

        }, 800);

    }

}


function encerrarTreino() {

    if (
        confirm(
            "Deseja realmente encerrar o treino?"
        )
    ) {

        window.location.href =
            "encerrar.html";

    }

}


window.onload = carregarExercicio;