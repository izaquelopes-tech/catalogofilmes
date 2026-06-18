const documentarios = [{
    titulo: "Neymar - O Caos Perfeito",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/aMKNSwbkuCE3VoT3BfwVjQgrdmX.jpg",
    descricao: "Neymar: O Caos Perfeito é uma minissérie documental da Netflix que explora a vida pessoal e a carreira profissional do jogador Neymar Jr.",
},
{
    titulo: "Nosso planeta (2019)",
    imagem: "https://media.themoviedb.org/t/p/w58_and_h87_face/eqfdX4xNY7NANbn11APM7dZvJdD.jpg",
    descricao: "Nosso Planeta é uma série documental que explora a diversidade da vida na Terra e os diferentes ecossistemas que sustentam o equilíbrio natural do mundo. Ao longo dos episódios, o espectador viaja por florestas, oceanos, desertos, montanhas e regiões geladas, conhecendo espécies fascinantes e os desafios que enfrentam para sobreviver.",
},
{
    titulo: "Ponto de Virada: A Guerra do Vietnã (2025)",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/pwyhia2REWLVv3UmY9Cc5N7Gtfx.jpg",
    descricao: "A série documental da Netflix analisa os principais acontecimentos e consequências de um dos conflitos mais marcantes do século XX. A produção apresenta desde as origens políticas e históricas da guerra até os momentos mais intensos do confronto entre o Vietnã do Norte e o Vietnã do Sul, apoiado pelos Estados Unidos.",
},
{
    titulo: "Racionais: das ruas de São Paulo para o mundo (2022)",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/mRsRonH875t4CU7wFpDCqCPQ9Qz.jpg",
    descricao: "O documentário é uma produção dirigida por Juliana Vicente que conta a trajetória do maior grupo de rap brasileiro, o Racionais MC's.",
},
{
    titulo: "AmarElo- É Tudo Pra Ontem (2020)",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/Ac23UNPF7aNpxCRGdx9Aqfg4jsU.jpg",
    descricao: "O rapper Emicidarealizou um show no Theatro Municipal de São Paulo em que apresenta seu álbum AmarElo. Ele então aproveitou a oportunidade única para realizar também um documentário.",
},
{
    titulo: "Homem no fio",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/aizAiih55IcNgeQMSiyp7ExBdkY.jpg",
    descricao: "O documentário de James Marsh sobre a engenhosa façanha do artista Philippe Petit traz toda a tensão possível de um homem pendurado em um cabo (suspenso).",
},

]

const listaDocumentarios = document.getElementById("listaDocumentarios");

function mostrarDocumentarios(lista) {
    listaDocumentarios.innerHTML
    lista.forEach(documentarios => {
        listaDocumentarios.innerHTML += `<div class="col-md-4">
          <div class="card card-filme h-100">
          <img src="${documentarios.imagem}"
          class="card-img-top">
          <div class="card-body">
          <h3>${documentarios.titulo}</h3>
          <p>${documentarios.descricao}</p>
          <button class="btn btn-dark"onclick="verDetalhes('${documentarios.titulo}')">Ver detalhes</button>
          </div>
          </div>
          </div>
          `
    })
}

mostrarDocumentarios(documentarios)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações do documentário",
        icon: "info"
    })
}