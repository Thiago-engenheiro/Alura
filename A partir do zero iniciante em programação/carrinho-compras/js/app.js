let listaDeCompras = [];

document.getElementById('produto').value = '';
document.getElementById('quantidade').value = '';

let produtos = document.getElementById('lista-produtos');
produtos.innerHTML = 'carrinho vazio'; 

let Valor = document.getElementById('valor-total');
Valor.innerHTML = 'R$ 0'; 

function calcular (Valor) {

    let somaProdutos = 0;

    listaDeCompras.forEach(function(item) {

        somaProdutos += parseInt(item.quantidade * item.preco);

    });

    Valor.innerHTML = `R$${somaProdutos.toFixed(2)}`;

}

function exibirListaDeCompras (produtos) {

    produtos.innerHTML = ''; 

    listaDeCompras.forEach(function(item) {

        let exibirListaDeCompras = document.createElement('label');
        exibirListaDeCompras.classList.add('carrinho__produtos__produto');
       
        exibirListaDeCompras.innerHTML = ` <label class="carrinho__produtos__produto"> <span class="texto-azul"> ${item.quantidade}X </span> - ${item.nome} - <span class="texto-azul"> R$ ${item.preco} </span> </label>`;
      
        produtos.appendChild(exibirListaDeCompras);

    });

    calcular (Valor);

}

function adicionar() {

    let produtoEscohido = document.getElementById('produto').value; 
    let quantidade = document.getElementById('quantidade').value; 

    if (produtoEscohido === '' || quantidade === '' || quantidade === '0') {

        alert("Você precisa escolher um produto e a quantidade.");

    } else {
        
        let [nomeProduto, precoProduto] = produtoEscohido.split(' - '); 
        let precoProdutoSemSimbolo = precoProduto.replace('R$', ''); // Remove o símbolo da moeda
        let precoProdutoInteiro = parseInt(precoProdutoSemSimbolo); // Converte para inteiro
        

        let item = {

            nome: nomeProduto,
            preco: parseInt(precoProdutoInteiro),
            quantidade: parseInt(quantidade)

        };

        listaDeCompras.push(item);

        exibirListaDeCompras(produtos);

        document.getElementById('produto').value = '';
        document.getElementById('quantidade').value = '';

    }
}


function limpar () {

    document.getElementById('produto').value = '';
    document.getElementById('quantidade').value = '';
    produtos.innerHTML = 'carrinho vazio'; 
    Valor.innerHTML = 'R$ 0';

}