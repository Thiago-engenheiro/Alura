/* 
 
    Criador: Thiago Abraao
    Data inicial do inicio da atividade: 06/04/2024
    Data final do fim da atividade:  26/04/2024
    Objetivo: Aprendizado de JavaScript
    O que progama faz: jogo do numero secreto

*/
/*  __________________________________________________________________________________________________________________ */

/*  __________________________________________________________________________________________________________________ */
/*  Declaração de Variaveis  */

let numeroMaximo = 1;
let NumeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
let chute = null;
let tentativas = 1;


/*  __________________________________________________________________________________________________________________ */
/*  Codigo */

alert ( "  Ola amigo, Bem vindo ao jogo do numero secreto, seu objetivo: descobrir qual e o numero secreto!\n_______________________________________________________________________________   \n\nregras: \n\n" +
        " - o numero e aleatório entre 0 a 100, \n" +
        " - você tem 20 tentativas, \n\n" + 
        " - não vale roubar porra" );

chute = prompt('Escolha um número entre 1 e' + numeroMaximo);

while (chute != NumeroSecreto ) {

    tentativas++;

    if (chute != NumeroSecreto) {

        if (NumeroSecreto === chute || tentativas === 20) {
        
            break
    
        }

        if (NumeroSecreto > chute){

            chute = prompt('VOCE ERRROUUUUUUUUUUUUUUUUUU\n' +
            'dica: o numero secreto e maior que o seu chute\n\n' +
            'Escolha um número entre 1 e 100                       total de tantivas: ' + tentativas);

        } else {

            chute = prompt('VOCE ERRROUUUUUUUUUUUUUUUUUU\n' +
            'dica: o numero secreto e menor que o seu chute\n\n' +
            'Escolha um número entre 1 e 100                       total de tantivas: ' + tentativas);

        }

    }

}

tentativas++;

if (chute == NumeroSecreto) {

    if (tentativas <= 5) {

        alert("Tu é foda mesmo em, conseguiu acertar com apenas " + tentativas + " tentativas\n" +
        "Já sabe o que merece, né? ( ͡° ͜ʖ ͡°)");

    } else if (tentativas <= 13) {

        alert("Eu esperava mais, isso foi bem medíocre, conseguiu com " + tentativas + " tentativas\n" +
        "MELHORE");

    } else if (tentativas <= 19) {

        alert("Você está entre o limiar da sorte e da burrice, conseguiu com " + tentativas + " tentativas");

    }
} else {

    alert("OTARIO ERROU FOI TUDO, RECOMEÇA AI, O número secreto era " + NumeroSecreto);
    window.location.reload();

}

/*  __________________________________________________________________________________________________________________ */
/*  Fim  */