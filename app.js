//exer2
let texto = document.querySelector('h1'); 
texto.innerHTML = 'Hora do desafio!'

//exer3
function exibirTextoNoConsole(){
    console.log ("O botão console foi clicado");
}

//exer4
function mensagemAlert(){
    alert ("Eu amo JS!");
}

//exer5
let cidade 
function informaçãoPrompt(){
    cidade = prompt ("Informe o nome de uma cidade do Brasil:");
    alert (`Estive em ${cidade} e lembrei de você!`);
}

//exer6
let numero;
let numero2;
let resultado
function botãoSoma(){
    numero = parseInt(prompt ("Escolha um número:"));
    numero2 = parseInt(prompt ("Escolha um segundo número:"));
    resultado = (numero+numero2);
    alert (`O resultado da conta é ${resultado}!`);
}