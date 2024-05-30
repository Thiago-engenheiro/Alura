let listaDeAmigos = [];
let sorteio = document.getElementById('lista-sorteio');

function adicionar() {

    let amigo = document.getElementById('nome-amigo').value; 
    
    if (listaDeAmigos.includes(amigo)) {

        alert('Nome já adicionado!');

    } else if (amigo === '') {


        alert("Por favor, insira o nome de um amigo.");
        return;

    } else { 

        listaDeAmigos.push(amigo);

    }


    let lista = document.getElementById('lista-amigos');
    lista.textContent = listaDeAmigos.join(', ');
    document.getElementById('nome-amigo').value = ''; // Limpa o campo de entrada

}

function sortear() {

    sorteio.innerHTML = ''

    if (listaDeAmigos.length < 2) {

        alert("Por favor, insira mais nomes de amigos para realizar o amigo secreto.");
        return;

    }

    if (listaDeAmigos.length % 2 !== 0) {

        alert("O número de amigos deve ser par para realizar o amigo secreto.");
        return;

    }

    // Função para embaralhar um array usando o algoritmo de Fisher-Yates
    function embaralharArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
   
    let listaAuxiliar =  listaDeAmigos.slice();
    let listaAuxiliar02 = listaDeAmigos.slice(); 

    listaAuxiliar = listaAuxiliar.filter((_, index) => index % 2 === 0);
    listaAuxiliar02 = listaAuxiliar02.filter((_, index) => index % 2 === 1);

    listaAuxiliar = embaralharArray (listaAuxiliar);
    listaAuxiliar02 = embaralharArray ( listaAuxiliar02);

    for (let i = 0; i < listaDeAmigos.length/2; i++) {

        sorteio.innerHTML = sorteio.innerHTML + listaAuxiliar[i] + ' --> ' + listaAuxiliar02[i] + '<br>';


    }
    
}

function reiniciar() {

    listaDeAmigos = []; // Reseta a lista de amigos
    document.getElementById('nome-amigo').value = ''; // Limpa o campo de entrada
    document.getElementById('lista-amigos').textContent = ''; // Limpa a exibição da lista
    sorteio.innerHTML = ''; // Reseta a lista de sorteados

}
    
