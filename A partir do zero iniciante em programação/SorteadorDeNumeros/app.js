function sortear () {

    let totalDeNumerosSorteados = parseInt(document.getElementById ('quantidade').value);
    let numeroMinimo = parseInt(document.getElementById ('de').value);
    let numeroMaximo = parseInt(document.getElementById ('ate').value);

    let numerosSorteados = [];
    let numero;

    let botao = document.getElementById('btn-reiniciar');

    for (let contador = 0; contador < totalDeNumerosSorteados; contador++) {
        while (numerosSorteados.includes(numero)) {

            numero = obterNumeroAleatorio(numeroMinimo, numeroMaximo);
        
        }

        numero = obterNumeroAleatorio(numeroMinimo, numeroMaximo);
        numerosSorteados.push(numero);

    }

    let resultado = document.getElementById('resultado')
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`

    if (botao.classList.contains('container__botao-desabilitado')) {

        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } 

}

function obterNumeroAleatorio(numeroMinimo, numeroMaximo) {

    min = Math.ceil(numeroMinimo);
    max = Math.floor(numeroMaximo);
    return Math.floor(Math.random() * (numeroMaximo - numeroMinimo + 1)) + numeroMinimo;

}

function reiniciar () {
    
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = `<label class="texto__paragrafo"> Números sorteados: nenhum até agora </label>`;

    let botao = document.getElementById('btn-reiniciar');

    if (botao.classList.contains('container__botao')) {

        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');

    }

}
