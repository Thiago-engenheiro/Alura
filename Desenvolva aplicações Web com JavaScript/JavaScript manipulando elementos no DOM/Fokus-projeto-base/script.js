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

const mostraTempo = document.querySelector ('#timer');

const temporizadorInput = document.querySelector('#start-pause');
let tempoDecorrido = 1500;
let intervaloId = null;

const play = new Audio('sons/play.wav');
const pausar = new Audio('sons/pause.mp3');
const fim = new Audio('sons/beep.mp3');

const iniciarOuPausarBt = document.querySelector('#start-pause span')
const iniciarOuPausarImagem = document.querySelector('#start-pause .app__card-primary-butto-icon')

iniciarOuPausarImagem.setAttribute('src', `./imagens/play_arrow.png`)
mostrarTempo()

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

            zerar()
          
            texto.innerHTML = ` Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>`

            tempoDecorrido = 1500;
            mostrarTempo()

        break;

        case "descanso-curto" :

            zerar()
           
            texto.innerHTML = ` Que tal dar uma respirada?,<br>
            <strong class="app__title-strong">Faça uma pausa curta!.</strong>`

            tempoDecorrido = 600;
            mostrarTempo()

        break;

        case "descanso-longo" :

            zerar()
            
            texto.innerHTML = ` Hora de voltar à superfície.,<br>
            <strong class="app__title-strong">Faça uma pausa longa..</strong>`

            tempoDecorrido = 900;
            mostrarTempo()

        break;

        default:

        break;

    }

}

const temporizador = () => {

    if (tempoDecorrido <= 0) {

        fim.play()
        alert ("o tempo do foco acabou !")
        zerar()
        return

    }

    mostrarTempo()
    tempoDecorrido -= 1

}

temporizadorInput.addEventListener('click', iniciar);

function iniciar() {

    if(intervaloId){

        pausar.play()
        zerar()
        return

    }

    play.play()
    intervaloId = setInterval(temporizador, 1000)
    iniciarOuPausarImagem.setAttribute('src', `./imagens/play_arrow.png`)
    iniciarOuPausarImagem.setAttribute('src', `./imagens/pause.png`)
    iniciarOuPausarBt.textContent = "pausar"

}

function zerar() {

    iniciarOuPausarImagem.setAttribute('src', `./imagens/play_arrow.png`)
    iniciarOuPausarBt.textContent = "começar"
    clearInterval(intervaloId) 
    intervaloId = null

}

function mostrarTempo() {

    const tempo = new Date(tempoDecorrido * 1000)
    const tempoFormatado = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    mostraTempo.innerHTML = `${tempoFormatado}`

    
}


