const precos = {
    havaianas: 59.90,
    alpargatas: 75.90
}

const atualizarPreco = function (produto) {
    let quantidade = parseInt(document.getElementById(produto + '_quantidade').value);

    let precoTotal = quantidade * precos[produto];

    document.getElementById(produto + '_preco').innerText = 
       `R$ ${(precoTotal.toFixed(2))}`;
}

const salvarProdutos = function (){
    const produtos = {
        havaianas: {
            quantidade: document.getElementById('havaianas_quantidade').value,
            preco: document.getElementById('havaianas_preco').innerText
        },
        alpargatas: {
            quantidade: document.getElementById('alpargatas_quantidade').value,
            preco: document.getElementById('alpargatas_preco').innerText
        }
    }
    sessionStorage.setItem('produtos',JSON.stringify(produtos));
}





