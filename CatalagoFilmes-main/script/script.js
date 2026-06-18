const filmes = [{
    titulo: "Mortal Kombat",
    imagem: "https://image.tmdb.org/t/p/w500/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
    descricao: "O lutador de MMA Cole Young não conhece sua herança, nem sabe o motivo do Imperador da Exoterra ter enviado seu melhor guerreiro, Sub-Zero, para ir atrás dele. Temendo pela segurança de sua família, ele se une a outros heróis para proteger a Terra.",
},
{
    titulo: "Batman",
    imagem: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    descricao: "Após dois anos espreitando as ruas como Batman, Bruce Wayne se encontra nas profundezas mais sombrias de Gotham City. Com poucos aliados confiáveis, o vigilante solitário se estabelece como a personificação da vingança para a população.."
},
{
    titulo: "Homem-Aranha: Sem Volta para Casa",
    imagem: "https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    descricao: "Peter Parker tem a sua identidade secreta revelada e pede ajuda ao Doutor Estranho. Quando o feitiço para reverter o evento não sai como esperado, o Homem-Aranha e o seu companheiro dos Vingadores precisam enfrentar inimigos de todo o multiverso.",
},
{
    titulo: "Homem-Aranha no Aranhaverso",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/gte2cJ3mtc2I8hZyXwRTzyclKuC.jpg",
    descricao: "Um jovem do Brooklyn picado por uma aranha radioativa, ganha poderes e precisa assumir o manto de herói após a morte de Peter Parker.",
},
{
    titulo: "Até o Último Homem",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/mPnU3yKuZpmLjkVXGplhkpX31LY.jpg",
    descricao: "Até o Último Homem conta a história verdadeira de um combatente de guerra.",
},
{
    titulo: "Gigantes de Aço",
    imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/pp74uUjwQTknGPqNrerj4FvU0ce.jpg",
    descricao: "É um filme de ficção científica, ação e drama lançado em 2011, estrelado por Hugh Jackman e dirigido por Shawn Levy. A trama se passa em um futuro próximo onde o boxe humano foi proibido por ser considerado muito violento, sendo totalmente substituído por lutas de robôs gigantes de alta tecnologia controlados por humanos.",
},

]

const listaFilmes = document.getElementById("listaFilmes");

function mostrarFilmes(lista) {
    listaFilmes.innerHTML
    lista.forEach(filme => {
        listaFilmes.innerHTML += `<div class="col-md-4">
          <div class="card card-filme h-100">
          <img src="${filme.imagem}"
          class="card-img-top">
          <div class="card-body">
          <h3>${filme.titulo}</h3>
          <p>${filme.descricao}</p>
          <button class="btn btn-dark"onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
          </div>
          </div>
          </div>
          `
    })
}

mostrarFilmes(filmes)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações do filme",
        icon: "info"
    })
}