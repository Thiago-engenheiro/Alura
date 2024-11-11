async function videosServidor() {
    
    const conexao = await fetch ("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();

    return conexaoConvertida;

}

async function buscaVideoPesquisado(termoBuscado) {
    if (!termoBuscado || termoBuscado.trim() === "") {
        return []; // Retorna uma lista vazia se o termo de busca estiver vazio
    }

    const conexaoTermo = await fetch(`http://localhost:3000/videos?q=${encodeURIComponent(termoBuscado)}`);
    const conexaoTermo__Convertida = await conexaoTermo.json();

    return conexaoTermo__Convertida;
}

export const conectaApi = {

    videosServidor,
    buscaVideoPesquisado,

}
