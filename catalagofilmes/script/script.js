const filmes = [{
    titulo: "Vingadores",
    imagem:"https://image.tmdb.org/t/p/w500/6ELCZlTA5lGUops70hKdB83WJxH.jpg",
    descricao: "Os maiores herois da terra unidos.",
},
{
    titulo: "Batman",
    imagem:"https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    descricao: "o cavaleiro das trevas,"
},
{
    titulo:"homem aranha",
    imagem:"https://image.tmdb.org/t/p/w500/fVzXp3NwovUlLe7fvoRynCmBPNc.jpg",
    descricao:"o amigo da vizinhança",
},
]

const listaFilmes = document.getElementById
("listarFilmes");

function mostrarFilmes(lista){
    listaFilmes.innerHTML =""
    lista.forEach(filme => {
        listaFilmes,innerHTML +=`
        <div class= "col-md-4">
        <div class="card card-filme h-100">
        <img src="${filme,imagem}"
        class="card-img-top">
        div class="card-body">
        <h3>${filme.titulo}</h3>
        <p>${filme.descricao}</p>
        <button class= "btn btn-dark"
        onclick="verDetalhes('${filme.titulo}')">Ver detalhes</button>
        </div>
        </div>
    </div>
        `
    });
}

mostrarFilmes(filmes)
function verDetalhes(titulo){
    Swal.fire({
        title: titulo,
        text: "Mais informações do filme",
        icon: "info"
    })
}