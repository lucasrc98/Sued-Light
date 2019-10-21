alert('Bem vindo, mortal. Me faça uma pergunta');    

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
let perguntaPadrao = perguntas[Math.floor(Math.random() * perguntas.length)]

/*Passando uma resposta aleatoria do banco de respostas para a variavel respostaPadrao
que sera utilizada quando o usuario fizer uma pergunta mas nao tiver apertado o botão chave antes */
let respostaPadrao = respostas[Math.floor(Math.random() * respostas.length)]

elementoEntrada.addEventListener("input", (e) =>{
	let element = e.target;
	if (e.data == ";") {
		ocultar = !ocultar;
		
		element.value = element.value.substring(0, element.value.length - 1)
		return;
	}
	if(ocultar){
		if(e.inputType == "deleteContentBackward"){
			resposta = resposta.substring(0, resposta.value.length - 1)
			contador = ((contador - 1)< 0) ? 0 : contador --;
			return;
		}
		element.value = element.value.substring(0, element.value.length - 1) +
			perguntaPadrao.charAt(contador ++)
		resposta += e.data;
	}

})
function mostraResposta(){
	let elementoResposta = document.getElementById("answer");
	if (contador <= 0) {
		elementoResposta.innerText = respostaPadrao;
	}else{
		elementoResposta.innerText = resposta;
	}
}