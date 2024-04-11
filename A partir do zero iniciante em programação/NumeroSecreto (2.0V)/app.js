/* 
 
    Criador: Thiago Abraao
    Data inicial do inicio da atividade: 10/04/2024
    Data final do fim da atividade:  10/04/2024
    Objetivo: Aprendizado de JavaScript
    O que progama faz: jogo do numero secreto (2V)

*/
/*  __________________________________________________________________________________________________________________ */

/*  __________________________________________________________________________________________________________________ */
/*  Declaração de Variaveis  */

    let chances = 15;
    let tentativas = 1;

/*  __________________________________________________________________________________________________________________ */
/*  Codigo */

function exibirTextoNaTela(classe, texto) {

    let elementos = document.getElementsByClassName(classe);

    for (let i = 0; i < elementos.length; i++) {

        elementos[i].innerText = texto;

    }

    responsiveVoice.speak(classe, 'Brazilian Portuguese Female', {rate: 1.2});

}
function limparCampo() {

    chute = document.querySelector('input');
    chute.value = '';

}

function NovoNumeroSecreto() {

    let numeroMaximo = 100;
    let RetornoNumeroSecreto = Math.floor(Math.random() * numeroMaximo) + 1;
    return RetornoNumeroSecreto;

}

function NovoJogo() {

    chances = 16;
    tentativas = 1;
   
    limparCampo();
    verificarChute();
    NumeroSecreto = NovoNumeroSecreto();

    document.getElementById('iniciar').disabled = false;
    document.getElementById('reiniciar').disabled = true;

}

let NumeroSecreto = NovoNumeroSecreto();

exibirTextoNaTela('titulo', 'Jogo do número secreto');
exibirTextoNaTela('texto__paragrafo', 'Escolha um número entre 1 e 100');
exibirTextoNaTela('texto__paragrafo__02', `voce tem ${chances} chances para acerta o numero secreto e: ${NumeroSecreto}`);

function verificarChute() {

    exibirTextoNaTela('titulo', 'Jogo do número secreto');
    exibirTextoNaTela('texto__paragrafo', 'Escolha um número entre 1 e 100');
    exibirTextoNaTela('texto__paragrafo__02', `voce tem ${chances} chances para acerta o numero secreto e: ${NumeroSecreto}`);

    let chute = document.querySelector('input').value;

    if (chute == NumeroSecreto) {

        exibirTextoNaTela('titulo', 'Jogo do número secreto');
        exibirTextoNaTela('texto__paragrafo', 'Parabens !!! você acertou !');
        exibirTextoNaTela('texto__paragrafo__02', `você tinha ${chances} chances de acerto e conseguiu com ${tentativas} tentativas`);
        document.getElementById('iniciar').disabled = true;
        document.getElementById('reiniciar').removeAttribute('disabled');
        return; 

    } else {

        chances--;

        if (chute > NumeroSecreto) {

            exibirTextoNaTela('texto__paragrafo', 'O número secreto é menor');
            exibirTextoNaTela('texto__paragrafo__02', `Você tem ${chances} chances para acertar`);
    
        } else {
    
            exibirTextoNaTela('texto__paragrafo', 'O número secreto é maior');
            exibirTextoNaTela('texto__paragrafo__02', `Você tem ${chances} chances para acertar`);
    
        }

        limparCampo();
        tentativas++;

    }

    if (chances <= 0) {

        exibirTextoNaTela('titulo', 'Jogo do número secreto');
        exibirTextoNaTela('texto__paragrafo', 'Suas chances acabaram !');
        exibirTextoNaTela('texto__paragrafo__02', `Tente um novo jogo`);
        document.getElementById('iniciar').disabled = true;
        document.getElementById('reiniciar').removeAttribute('disabled');
        return;

    }

}





