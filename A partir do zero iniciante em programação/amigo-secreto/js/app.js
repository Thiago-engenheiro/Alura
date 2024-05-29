let listaDeAmigos = [];

function adicionar() {

    let amigo = document.getElementById('nome-amigo').value; 

    if(amigo) { 

        listaDeAmigos.push(amigo);

    } else {

        alert("Por favor, insira o nome de um amigo.");
        return;

    }

    let lista = document.getElementById('lista-amigos');
    lista.textContent = listaDeAmigos.join(', ');
    document.getElementById('nome-amigo').value = ''; // Limpa o campo de entrada

}

function sortear() {

    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = ''

    if (listaDeAmigos.length < 2) {

        alert("Por favor, insira mais nomes de amigos para realizar o amigo secreto.");
        return;

    }

    if (listaDeAmigos.length % 2 !== 0) {

        alert("O número de amigos deve ser par para realizar o amigo secreto.");
        return;

    }
   
    let listaAuxiliar = listaDeAmigos.slice();
    let listaAuxiliar02 = listaDeAmigos.slice().reverse(); // Reverte a ordem de listaAuxiliar02

    let sorteioInvalido = true;

    // Função para embaralhar um array usando o algoritmo de Fisher-Yates
    function embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    // Continua tentando até que o sorteio seja válido
    while (sorteioInvalido) {

        listaAuxiliar = embaralharArray(listaDeAmigos.slice());
        listaAuxiliar02 = embaralharArray(listaDeAmigos.slice().reverse()); // Embaralha após reverter

        

        sorteioInvalido = false;
        for (let i = 0; i < listaDeAmigos.length; i++) {
            if (listaAuxiliar[i] === listaAuxiliar02[i]) {
                sorteioInvalido = true;
                break;
            }
        }
    }

    for (let i = 0; i < listaDeAmigos.length/2; i++) {

        sorteio.innerHTML = sorteio.innerHTML + listaAuxiliar[i] + ' --> ' + listaAuxiliar02[i] + '<br>';


    }
    
}


function sortear() {
    let sorteio = document.getElementById('lista-sorteio');
    sorteio.innerHTML = '';

    if (listaDeAmigos.length < 2) {
        alert("Por favor, insira mais nomes de amigos para realizar o amigo secreto.");
        return;
    }

    if (listaDeAmigos.length % 2 !== 0) {
        alert("O número de amigos deve ser par para realizar o amigo secreto.");
        return;
    }
   
    let listaAuxiliar = listaDeAmigos.slice();
    let listaSorteada = [];
    let candidatosDisponiveis = listaDeAmigos.slice(); // Inicialmente, todos são candidatos disponíveis

    while (listaAuxiliar.length > 0) {
        // Sorteia o índice de uma pessoa da listaAuxiliar
        const indiceSorteado = Math.floor(Math.random() * listaAuxiliar.length);
        const pessoaSorteada = listaAuxiliar[indiceSorteado];

        // Remove a pessoa sorteada da listaAuxiliar
        listaAuxiliar.splice(indiceSorteado, 1);

        // Sorteia o índice de uma pessoa para ela tirar da lista de candidatos disponíveis
        const indiceSorteadoCandidato = Math.floor(Math.random() * candidatosDisponiveis.length);
        const pessoaTirada = candidatosDisponiveis[indiceSorteadoCandidato];

        // Remove a pessoa tirada da lista de candidatos disponíveis
        candidatosDisponiveis.splice(indiceSorteadoCandidato, 1);

        // Adiciona a atribuição à listaSorteada
        listaSorteada.push(`${pessoaSorteada} --> ${pessoaTirada}`);
    }

    // Exibe o resultado na página
    for (let i = 0; i < listaSorteada.length; i++) {
        sorteio.innerHTML += listaSorteada[i] + '<br>';
    }
}

function reiniciar() {

    listaDeAmigos = []; // Reseta a lista de amigos
    document.getElementById('nome-amigo').value = ''; // Limpa o campo de entrada
    document.getElementById('lista-amigos').textContent = ''; // Limpa a exibição da lista
    sorteio.textContent = ''; // Reseta a lista de sorteados

}
    
