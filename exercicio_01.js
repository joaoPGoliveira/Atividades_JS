let dados = [];

function adicionarValor() {
    const novoValor = document.getElementById('valor').value.trim();
    
    if (novoValor !== '') {
        dados.push(novoValor);
        mostrarDados();
        document.getElementById('valor').value = '';
    } else {
        alert('[ERRO]. Por favor, insira um valor válido!');
    }
}

function mostrarDados() {
    const listaDados = document.getElementById('listarDados');
    listaDados.innerHTML = '';
    
    dados.sort();
    
    dados.forEach(valor => {
        const itemLista = document.createElement('li');
        itemLista.textContent = valor;
        listaDados.appendChild(itemLista);
    });
}