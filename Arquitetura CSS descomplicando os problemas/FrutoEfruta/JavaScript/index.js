function aparecerReceita () {

    const cliqueBotaoReceita = document.getElementsByClassName ('indexConteudoPrincipal__cards--intens--botao');
    
    const caixasDaReceita = document.getElementsByClassName ('indexConteudoPrincipal__cards--receita');
    const overlay = document.querySelector('.overlay');

    for (let i = 0; i < caixasDaReceita.length; i++) {
    
        caixasDaReceita[i].style.display = 'block';

    }

    overlay.style.display = 'block'; // Exibe o overlay

}

function esconderReceita () {

    const caixasDaReceita = document.getElementsByClassName ('indexConteudoPrincipal__cards--receita');
    const xDaCaixaDeReceita = document.getElementsByClassName ('indexConteudoPrincipal__cards--receita--botao');
    const overlay = document.querySelector('.overlay');
   
    for (let i = 0; i < caixasDaReceita.length; i++) {

        caixasDaReceita[i].style.display = 'none';

    }

    overlay.style.display = 'none'; // Esconde o overlay

}