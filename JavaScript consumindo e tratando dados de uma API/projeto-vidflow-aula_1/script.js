const continerVideos = document.querySelector(".videos__container");

async function BuscarEMostarVideos() {
    
    try {

        const urlBase = await fetch ("http://localhost:3000/videos");
        const videos = await urlBase.json();

        videos.forEach((video) => {

            continerVideos.innerHTML += `
                
            <li class = "videos__item">

                <iframe src="${video.url}" title"${video.titulo}" frameborder="0" allowfullscreen></iframe>
                <div class = "descricao-video">

                    <img class = "img-canal" src = "${video.imagem}">
                    <h3 class = "titulo-video">${video.titulo}</h3>
                    <p class = "titulo-canal"> ${video.descricao}</p>
                    <p class = "categoria" hidden> ${video.categoria}</p>

                </div

            </li>

            `;

        })

    } catch (error) {

        continerVideos.innerHTML = `<p> Houve um error ao carregar os vídeos: ${error} </p> ` ;

    } 

}

BuscarEMostarVideos();

const barraDePesquisa = document.querySelector (".pesquisar__input");

barraDePesquisa.addEventListener ("input", filtrarPesquisa);

function filtrarPesquisa () {

    const videos = document.querySelectorAll (".videos__item");

    if (barraDePesquisa.value != "") {

        for (let video of videos) {

            let titulo = video.querySelector(".titulo-video").textContent.toLocaleLowerCase();
            let palavrasBuscadas = barraDePesquisa.value.toLocaleLowerCase();

            if (!titulo.includes(palavrasBuscadas)) {

                video.style.display = "none";

            } else {

                video.style.display = "block";

            }

        }

    } else {

        video.style.display = "block";

    }
    
    const botaoCategoria = document.querySelectorAll(".superior__item");

botaoCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute("name");
    botao.addEventListener("click", () => filtrarPorCategoria(nomeCategoria));
})

function filtrarPorCategoria(filtro){
    const videos = document.querySelectorAll(".videos__item");
    for(let video of videos){
        let categoria = video.querySelector(".categoria").textContent.toLowerCase();
        let valorFiltro = filtro.toLowerCase();

        if(!categoria.includes(valorFiltro) && valorFiltro != 'tudo'){
            video.style.display = "none";
        } else {
            video.style.display = "block";
        }
    }
}
}