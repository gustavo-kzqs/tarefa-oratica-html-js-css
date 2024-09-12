const tabelaContatos = document.getElementById("tabelaContatos").getElementsByTagName("tbody")[0];
const formContato = document.getElementById("formContato");

    formContato.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("telefone").value;

     const novaLinha = tabelaContatos.insertRow();
    const celulaNome = novaLinha.insertCell();
    const celulaTelefone = novaLinha.insertCell();

    celulaNome.textContent = nome;
    celulaTelefone.textContent = telefone;

    formContato.reset();
    });