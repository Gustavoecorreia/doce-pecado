// Array de produtos (exemplo)
const produtos = [
    { id: 1, nome: "Sutiã", preco: 50, imagem: "sutia.jpg" },
    { id: 2, nome: "Calcinha", preco: 30, imagem: "calcinha.jpg" },
    // ... outros produtos
];

// Função para adicionar produtos à página
function adicionarProdutos() {
    const produtosDiv = document.querySelector('.produtos');
    produtos.forEach(produto => {
        const divProduto = document.createElement('div');
        divProduto.classList.add('produto');
        divProduto.innerHTML = `
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco}</p>
            <button data-id="${produto.id}">Adicionar ao Carrinho</button>
        `;
        produtosDiv.appendChild(divProduto);
    });
}

// Função para adicionar um item ao carrinho
function adicionarAoCarrinho(id) {
    // ... lógica para adicionar o produto ao carrinho
}

// ... outras funções para remover itens, calcular total, etc.

// Chamar a função para adicionar produtos ao carregar a página
adicionarProdutos();

// Adicionar event listeners para os botões
const botoesAdicionar = document.querySelectorAll('.produto button');
botoesAdicionar.forEach(botao => {
    botao.addEventListener('click', () => {
        const idProduto = botao.dataset.id;
        adicionarAoCarrinho(idProduto);
    });
});