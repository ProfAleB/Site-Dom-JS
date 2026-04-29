// 1. Selecionando os elementos do DOM
const form = document.getElementById('cadastroForm');
const lista = document.getElementById('listaAlunos');

// 2. Função para adicionar o aluno na tela
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o site de recarregar

    // Capturando valores dos inputs
    const nome = document.getElementById('nomeAlun').value;
    const idade = document.getElementById('idadeAlun').value;

    // Criando um novo elemento de lista (li)
    const novoItem = document.createElement('li');
    novoItem.innerHTML = `<strong>${nome}</strong> - ${idade} anos`;

    // Adicionando o item à lista no HTML
    lista.appendChild(novoItem);

    // Limpando o formulário
    form.reset();
});