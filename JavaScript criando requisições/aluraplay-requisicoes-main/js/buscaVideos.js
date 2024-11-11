import { conectaApi } from "./conectaApi.js";
import  criarCard  from "./renderizarVideos.js";

const botaoPesquisar = document.querySelector(".pesquisar__botao");

async function buscaVideos(evento) {

    evento.preventDefault();
    const textoVideoPesquisado = document.querySelector("[data--pesquisa]").value;
    const buscaVideo = await conectaApi.buscaVideoPesquisado(textoVideoPesquisado);

    const lista = document.querySelector("[data--lista]");

    while (lista.firstChild) {

        lista.removeChild(lista.firstChild)

    }

    buscaVideo.forEach(elemento => lista.appendChild(criarCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));
        
}

botaoPesquisar.addEventListener("click", evento => buscaVideos(evento));

