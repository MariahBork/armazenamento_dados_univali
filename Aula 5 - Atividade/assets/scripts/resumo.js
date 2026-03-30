const carregarEndereco = function(){
    let endereco = JSON.parse(sessionStorage.getItem('endereco'));
    document.getElementById('rua').innerText = endereco.rua;
    document.getElementById('cidade').innerText = endereco.cidade;
    document.getElementById('estado').innerText = endereco.estado;
    document.getElementById('cep').innerText = endereco.cep;
}
carregarEndereco();

const carregarProdutos = function(){
    let produtos = JSON.parse(sessionStorage.getItem('produtos'));
    document.getElementById('havaianas_quantidade').innerText = produtos.havaianas.quantidade;
    document.getElementById('havaianas_preco').innerText = produtos.havaianas.preco;
    document.getElementById('alpargatas_quantidade').innerText = produtos.alpargatas.quantidade;
    document.getElementById('alpargatas_preco').innerText = produtos.alpargatas.preco;
}
carregarProdutos();