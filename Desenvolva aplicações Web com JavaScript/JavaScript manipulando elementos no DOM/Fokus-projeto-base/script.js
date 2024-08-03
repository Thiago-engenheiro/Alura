
const pagina = document.querySelector('html') 

const botao01 = document.querySelector('.app__card-button--foco');
const botao02 = document.querySelector('.app__card-button--curto');
const botao03 = document.querySelector('.app__card-button--longo');
const botoes = document.querySelectorAll('.app__card-button');

const imagem = document.querySelector('.app__image');
const texto = document.querySelector('.app__title');

const musicaFocoInput = document.querySelector('#alternar-musica');
const musica = new Audio('sons/luna-rise-part-one.mp3');
musica.loop = true;

musicaFocoInput.addEventListener('change', () => {

    if(musica.paused) {

        musica.play()

    } else {

        musica.pause()

    }

})

botao01.addEventListener ('click', () => { 

    alterarContexto('foco')
    botao01.classList.add('active')


})

botao02.addEventListener ('click', () => { 

    alterarContexto('descanso-curto')
    botao02.classList.add('active')
   
})

botao03.addEventListener ('click', () => { 

    alterarContexto('descanso-longo')
    botao03.classList.add('active')

})

function alterarContexto(contexto) {

    pagina.setAttribute('data-contexto', contexto)
    imagem.setAttribute('src', `./imagens/${contexto}.png`)

    botoes.forEach(function (contexto) {

        contexto.classList.remove('active')

    })
    
    switch (contexto) {

        case "foco" :

            texto.innerHTML = ` Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`

        break;

        case "descanso-curto" :

            texto.innerHTML = ` Que tal dar uma respirada?,<br>
            <strong class="app__title-strong">Faça uma pausa curta!.</strong>`

        break;

        case "descanso-longo" :

            texto.innerHTML = ` Hora de voltar à superfície.,<br>
            <strong class="app__title-strong">Faça uma pausa longa..</strong>`

        break;

        default:

        break;

    }

}

