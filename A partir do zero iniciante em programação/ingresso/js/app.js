function contagem (TipoDeIngresso, quantidade) {

    let restanteIngressosPista = parseInt(document.getElementById('qtd-pista').textContent, 10);
    let restanteIngressosCadeiraSuperior = parseInt(document.getElementById(`qtd-superior`).textContent, 10);
    let restanteIngressosInferior = parseInt(document.getElementById(`qtd-inferior`).textContent, 10);

    if (TipoDeIngresso === 'pista') {

        if (restanteIngressosPista === 0) {

            alert ("Desculpe ! Os ingressos da pista, acabou.")

        } else if (quantidade > restanteIngressosPista) {

            alert("Desculpe! A quantidade solicitada de ingressos excede os ingressos restantes.");

        } else {

            restanteIngressosPista -= quantidade;
            document.getElementById('qtd-pista').textContent = restanteIngressosPista;
            
        }

    }

    if (TipoDeIngresso === 'superior') {

        if (restanteIngressosCadeiraSuperior === 0) {

            alert ("Desculpe ! Os ingressos da pista, acabou.")

        } else if (quantidade > restanteIngressosCadeiraSuperior) {

            alert("Desculpe! A quantidade solicitada de ingressos excede os ingressos restantes.");

        } else {

            restanteIngressosCadeiraSuperior -= quantidade;
            document.getElementById('qtd-superior').textContent = restanteIngressosCadeiraSuperior;
            
        }

    }

    if (TipoDeIngresso === 'inferior') {

        if (restanteIngressosInferior === 0) {

            alert ("Desculpe ! Os ingressos da pista, acabou.")

        } else if (quantidade > restanteIngressosInferior) {

            alert("Desculpe! A quantidade solicitada de ingressos excede os ingressos restantes.");

        } else {

            restanteIngressosInferior -= quantidade;
            document.getElementById('qtd-inferior').textContent = restanteIngressosInferior;
            
        }

    }

    document.getElementById('tipo-ingresso').value = '';
    document.getElementById('qtd').value = '';

}

function comprar () {

    let TipoDeIngresso = document.getElementById(`tipo-ingresso`).value;
    let quantidade = document.getElementById(`qtd`).value;

    contagem (TipoDeIngresso, quantidade);
    
}

