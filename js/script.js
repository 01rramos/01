function enviarFormulario(event){
    console.log("clicou")
    event.preventDefault();
    const nome = document.getElementById('nomeContato').value;
    const email = document.getElementById('emailContato').value;
    const telefone = document.getElementById('telefoneContato').value;

    const mensagem = `
        dados enviados com sucesso!<br>
        Nome: ${nome}<br>
        Email: ${email}<br>
        Telefone: ${telefone}
        `;
    console.log(mensagem)
    document.getElementById('mensagem-confirmacao').innerHTML = mensagem;
}

function mostrarFatoGato(){
    fetch("https://catfact.ninja/fact")
    .then(respota => respota.json())
    .then(dados => {
        document.getElementById('fato-gato').innerText = dados.fact;
    })
    .catch(erro => console.error('Erro ao buscar fato do gato:', erro));
}

function mostrarImagemCachorro(){
    console.log('chegou na função')
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(resposta => resposta.json())
    .then(dados => {
        console.log('chegou na função',dados)
        document.getElementById('imagem-cachorro').src = dados.message;
    })
    .catch(erro => console.error('Erro ao buscar imagem do cachorro:', erro));

}
