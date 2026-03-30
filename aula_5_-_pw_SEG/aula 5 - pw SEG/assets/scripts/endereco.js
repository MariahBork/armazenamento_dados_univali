const salvarEndereco = function () {

    let endereco = {
        rua: document.getElementById('rua').value,
        cidade: document.getElementById('cidade').value,
        estado: document.getElementById('estado').value,
        cep: document.getElementById('cep').value
    }
    sessionStorage.setItem('endereco',JSON.stringify(endereco));
}

const carregarEndereco = function () {

    let endereco = JSON.parse(sessionStorage.getItem('endereco'));    
    let mensagem = `Rua: ${endereco.rua} 
    \nCidade: ${endereco.cidade}
    \nEstado: ${endereco.estado}
    \nCEP: ${endereco.cep}
    `;

    console.log(mensagem);
}