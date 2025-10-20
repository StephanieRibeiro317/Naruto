console.log("API do Naruto carregada com sucesso!");
let personagens;

// Obter todos os personagens
// fetch() é uma função do JavaScript usada para fazer requisições HTTP
// O método .then() serve para tratar o resultado de uma PROMISE do fetch
// O método .json() converte a resposta em um objeto JavaScript json.
// data é o nome da variável que armazena o resultado da requisição
// console.log() exibe o resultado no console do navegador
fetch('https://naruto-br-api.site/characters')
  .then(response => response.json())
  .then(data => personagens = data)
  .then(() => mostrarPersonagem()); // função anonima para mostrar os personagens
console.log("Deu certo!");
console.log(personagens);

// Função para mostrar um personagem
function mostrarPersonagem() {
    // mostrar todos os personagens
    console.log(personagens);
    // mostrar o primeiro personagem - 0 é o índice do array entre []
    //console.log(personagens[0]);
    // length é uma propriedade que conta os itens do array
    let id = Math.floor(Math.random() * personagens.length);
    console.log(id);
    let personagem = personagens[id];
    console.log(personagem.name);
    console.log(personagem.power);
    console.log(personagem.village.name);
    console.log(personagem.images[0].image_url);
    // document = é o html
    //getElementById() = seleciona um elemento pelo id (atributo de tag)
    // src = serve para trocar a imagem de uma tag IMG
    document.getElementById("imagem").src = personagem.profile_image;
    //innerHTML = serve para trocar o conteúdo de uma tag
    document.getElementById("personagem-nome").innerHTML = personagem.name;
    document.getElementById("personagem-rank").innerHTML= personagem.rank;
    document.getElementById("personagem-vila").innerHTML = personagem.village.name;
    document.getElementById("personagem-poder").innerHTML = personagem.power;
    document.getElementById("personagem-descricao").innerHTML= personagem.summary;

    console.log(personagem.jutsus);
    // for = estrutura de repetição
    // i = 0 começa do zero
    // personagem.jutus.lenghth = conta quantos jutsus tem o personagem
    // i++ = incrementa + 1 no i a cada repetição
    let lista = '<ul>';
    for (let i = 0; i< personagem.jutsus.length; i++) {
      // += = adiciona mais conteúdo na variável lista
      lista += `<li>${personagem.jutsus[i].name}</li>`;
    }
    // verificar se o personagem não tem jutsus
    if (personagem.jutsus.length == 0){
      lista += '<li>Sem habilidades cadastradas.</li>';
    }
    lista += '</ul>';
    document.getElementById("personagem-habilidade").innerHTML = lista;


}