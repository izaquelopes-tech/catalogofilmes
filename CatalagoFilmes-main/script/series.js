const series = [{
    titulo: "The Boys",
    imagem: "https://media.themoviedb.org/t/p/w300_and_h450_face/in1R2dDc421JxsoRWaIIAqVI2KE.jpg",
    descricao: "The Boys é uma sátira ácida sobre um mundo onde super-heróis são celebridades corruptas e patrocinadas por uma corporação gananciosa, a Vought International.",
},
{
    titulo: "Os Simpsons",
    imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/1jGPgDDcmg3Xgs3WO8sfYfbnFoA.jpg",
    descricao: "A obra é uma sátira da sociedade, da cultura pop e do estilo de vida da classe média dos Estados Unidos, acompanhando o dia a dia da família protagonista na cidade fictícia de Springfield.",
},
{
    titulo: "Breaking Bad",
    imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/hGwm9Cj3CdbJIqQWNExQqiYmCd4.jpg",
    descricao: "Breaking Bad é um aclamado drama criminal que acompanha a transformação de Walter White, um pacato professor de química do ensino médio diagnosticado com câncer terminal. ",
},
{
    titulo: "Invencível",
    imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/qhb7RWU9ad9a5m3HbeRRXzjaMXf.jpg",
    descricao: "Invencível (Invincible) é uma aclamada série de super-heróis criada por Robert Kirkman, famosa por suas reviravoltas chocantes, violência gráfica e tom adulto.",
},
{
    titulo: "Naruto Classico",
    imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/9ptbVZpKNy5NY9D4zq4KGiYWRQY.jpg",
    descricao: "Naruto Uzumaki é um jovem ninja da Vila Oculta da Folha. Órfão e rejeitado por abrigar a temida Raposa de Nove Caudas em seu corpo, ele supera a dor com trabalho duro e determinação. Seu maior sonho é se tornar Hokage, o líder e protetor supremo de sua aldeia.",
},
{
    titulo: "Apenas Um Show",
    imagem: "https://media.themoviedb.org/t/p/w220_and_h330_face/zsiUNYM8z9odHhEQPl3UR3fyTzT.jpg",
    descricao: "A história acompanha dois melhores amigos — Mordecai (um gaio-azul) e Rigby (um guaxinim) — que trabalham como jardineiros em um parque. Eles são preguiçosos, adoram jogar videogame e buscam qualquer desculpa para fugir do trabalho.",
},

]

const listaSeries = document.getElementById("listaSeries");

function mostrarSeries(lista) {
    listaSeries.innerHTML
    lista.forEach(serie => {
        listaSeries.innerHTML += `<div class="col-md-4">
          <div class="card card-serie h-100">
          <img src="${serie.imagem}"
          class="card-img-top">
          <div class="card-body">
          <h3>${serie.titulo}</h3>
          <p>${serie.descricao}</p>
          <button class="btn btn-dark"onclick="verDetalhes('${serie.titulo}')">Ver detalhes</button>
          </div>
          </div>
          </div>
          `
    })
}

mostrarSeries(series)
function verDetalhes(titulo) {
    Swal.fire({
        title: titulo,
        text: "Mais informações das Series",
        icon: "info"
    })
}