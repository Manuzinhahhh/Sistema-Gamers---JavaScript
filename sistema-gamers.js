const prompt = require('prompt-sync')();

let time = [];
let continuar = true;

function mostrarMenu() {
    console.log("\n");
    console.log("====================================");
    console.log("          SISTEMA DE GAMERS         ");
    console.log("====================================");
    console.log("     1 - Cadastrar jogador          ");
    console.log("     2 - Deletar jogador            ");
    console.log("     3 - Mostrar Equipe             ");
    console.log("     4 - Cálcula da Média da Equipe ");
    console.log("     5 - Buscar jogador             ");
    console.log("     6 - Atualizar jogador          ");
    console.log("     7 - Sair                       ");
    console.log("====================================");
}

function Cadastrarjogador(){
    let nomejogador = prompt("Digite o nome do Jogador: ");
    let funcaojogador = prompt("Digite a Função no time: ");
    let pontuacaojogador = Number(prompt("Digite a Pontuação: "));

    if(isNaN(pontuacaojogador)){
        console.log("Pontuação INVÁLIDA!")
        return;
    } else {
        let recutra = {
            nome: nomejogador,
            funcao: funcaojogador,
            pontuacao: pontuacaojogador
        }

        time.push(recutra);
        console.log("Jogador " + nomejogador + " foi cadastrado com SUCESSO!");
    }

}

function deletarjogador(){
    if (time.length === 0){
        console.log("Nunhum Jogado CADASTRADO!");
        return;        
    }

    let nomedeletado = prompt("Digite o nome a ser Deletado: ");
    let indexdeletado = -1;

    for (let i = 0; i < time.length; i++){
        if (time[i].nome === nomedeletado){
            indexdeletado = i;
            break;
        }
    }

    if (indexdeletado === -1){
        console.log("Nenhum Jogador ENCONTRADO!");
        return;
    }  

    time.splice(indexdeletado, 1);
    console.log("Jogador Deletado com SUCESSO!");
    
}

function mostrarequipe(){
    if (time.length === 0){
        console.log("Nunhum Jogado CADASTRADO!");
        return;
    }

    for(let i = 0; i < time.length; i++){
        let jogador = time[i];
        console.log((i + 1) + ". " + jogador.nome + "|Função: " + jogador.funcao + "|Pontuação: " + jogador.pontuacao);
    }

}

function calculodamedia(){
    if (time.length === 0){
        console.log("Nunhum Jogado CADASTRADO!");
        return; 
    }
    
    let totalpontos = 0;
    
    for (let i = 0; i < time.length; i++){
        totalpontos = totalpontos + time[i].pontuacao;
    }

    let mediapontos = totalpontos / time.length;
    console.log("O Time possui uma Pontuação Média de: " + mediapontos + "pontos.");

}  

function buscarjogador(){
    if (time.length === 0){
        console.log("Nunhum Jogado CADASTRADO!");
        return; 
    }
    
    let nomedesejado = prompt("Qual é o nome que está Buscando?: ")
    console.log("Buscando por: " + nomedesejado + "... ");
    let encontrou = false;

    for (let i = 0; i < time.length; i++){
        let jogadoratual = time[i];

    if(jogadoratual.nome === nomedesejado){
        console.log("JOGADOR ENCONTRADO")
        console.log("|Nome: " + jogadoratual.nome +"|Pontos: " + jogadoratual.pontuacao);
        encontrou = true;
        return;
        }
    }

    if(encontrou === false){
        console.log("O Jogador " + nomedesejado + " não faz parte da nossa Equipe.")
    }

}

function atualizarpontuacao(){
    let nomeatualizar = prompt("Qual o nome do Jogador que você quer atualizar?: ");
    console.log("Atualizar o " + nomeatualizar + "... ");
    let atualizar = false;

    for (let i = 0; i < time.length; i++){
        let jogadoratualizado = time[i];

    if(jogadoratualizado.nome === nomeatualizar){
        console.log("JOGADOR ENCONTRADO!")
        let pontosnovo = Number(prompt("Quantos pontos ele ganhou?: "));
        jogadoratualizado.pontuacao += pontosnovo;
        console.log("SUCESSO! A pontuação " + jogadoratualizado.nome + " subiu para " + pontosnovo + " pontos!");
        atualizar = true;
        return;
        }
    }

    if (atualizar === false){
        console.log("ERRO: Jogador não encontrado.");
    }

}

while(continuar === true){
    mostrarMenu();
    let opcao = prompt("Digite sua Opção:");

    if(opcao === "1"){
        Cadastrarjogador();
    } else if(opcao === "2"){
        deletarjogador();
    } else if(opcao === "3"){
        mostrarequipe();
    } else if(opcao === "4"){
        calculodamedia();
    } else if(opcao === "5"){
        buscarjogador();
    } else if(opcao === "6"){
        atualizarpontuacao();
    } else if(opcao === "7"){
        continuar = false;
    }
    else {
        console.log("Opção inválida!");
        console.log("Digite outra Opção...");
    }

}