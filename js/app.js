alert('Bem vindo mortal, me faça uma pergunta');    

//Array com as perguntas padrões 
const perguntas = [
	"Grande Sued, me ajude a descobrir",
	"Lord da sabedoria, me diga",
	"Seria possivel me responder"
]

//Array com as respostas padrões 
const respostas = [
	"Hoje é meu dia de folga",
	"Não recebo para responder esse tipo de pergunta",
	"Passe amanhã",
	"Volta outro dia"
]

let elementoEntrada = document.getElementById("inputField");
let elementoSaida = document.getElementById("answer");

let resposta = "";
let ocultar = false;
let contador = 0;

/*Passando uma pergunta aleatoria do banco de perguntas para a variavel perguntaPadrao
que sera utilizada para fingir que o usuario está digitando uma pergunta, depois que o botão chave for apertado */
let perguntaPadrao = perguntas[Math.floor(Math.random() * perguntas.length)];

/*Passando uma resposta aleatoria do banco de respostas para a variavel respostaPadrao
que sera utilizada quando o usuario fizer uma pergunta mas nao tiver apertado o botão chave antes */
let respostaPadrao = respostas[Math.floor(Math.random() * respostas.length)];