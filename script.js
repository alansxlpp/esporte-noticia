//Exercício 1- Mostrar Nome
function mostrarNome(){
  let nome = prompt("Qual é o seu nome?");
  document.getElementById("mensagem").innerText = "Olá," + nome + ".Seja Bem-Vindo!";
}
window.onload = function(){
  let nome = prompt("Qual é o seu nome?");
  document.getElementById("mensagem").innerText = "Olá," + nome + ".Seja Bem-Vindo!";
}
//Exercício 2- Somador
function somarNumeros(){
  let N1 = Number(prompt("digite o primeiro número"));
  let N2 = Number(prompt("digite o segundo número"));
  let soma= N1 + N2
  document.getElementById("mensagem2").innerText = "A soma é" + soma;
}
function subtrairNumeros(){
  let N1 = Number(prompt("digite o primeiro número"));
  let N2 = Number(prompt("digite o segundo número"));
  let sub = N1 - N2
  document.getElementById("mensagem3").innerText = "A subtração é " + sub;
}
function multiplicarNumeros(){
  let N1 = Number(prompt("digite o primeiro número"));
  let N2 = Number(prompt("digite o segundo número"));
  let multi = N1 * N2
  document.getElementById("mensagem4").innerText = "A multiplicação é " + multi;
}
function dividirNumeros(){
  let N1 = Number(prompt("digite o primeiro número"));
  let N2 = Number(prompt("digite o segundo número"));
  let div = N1 / N2
  document.getElementById("mensagem5").innerText = "A divisão é " + div;
}
//Exercício Cor
function mudarCor(){
//gera cor Aleatoria
  let corAleatoria = "#" + Math.floor(Math.random() * 16777215).toString(16);
//aplicar cor de fundo
document.body.style.backgroundColor = corAleatoria;
//mostrar cor no console
console.log("nova cor" + corAleatoria);
document.getElementById("mensagem6").innerText = corAleatoria;
document.getElementById("mensagem6").style.color = corAleatoria;
}

function modoEscuro(){
  let sections =  document.querySelectorAll("section");
  sections.forEach(function(sec){
  sec.style.backgroundColor = "grey";
  sec.style.color = "white";
});
let buttons = document.querySelectorAll("button");
buttons.forEach(function(but){
  but.style.backgroundColor = "Navy";
  
});

}
function modoClaro(){
//*modo claro
  let sections =  document.querySelectorAll("section");
  sections.forEach(function(sec){
  sec.style.backgroundColor = "white";
  sec.style.color = "white";
});
let buttons = document.querySelectorAll("button");
buttons.forEach(function(but){
  but.style.backgroundColor = "Navy";
  
});

}
let imagens = ["https://placehold.co/600x400","https://placehold.co/800x600"];
let indice = 0;
let intervalo;

function trocarImagem(){
  indice++;
  if (indice >= imagens.length){
    indice = 0;
  }
document.getElementById("imagem").src = imagens[indice];
  }

function iniciarTroca(){
  if(!intervalo){
    intervalo = setInterval(trocarImagem,5000);
  }
}
