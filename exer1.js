//exer3
function exibirTextoNoConsole() {
    console.log ('Olá, mundo!');
}

//exer4
function exibirTextoNoConsole(texto){
    let nome = prompt ('Digite aqui seu nome');
    console.log (`Olá,  ${nome}!`);
}

//exer5
n = parseInt(prompt('Digite um número'));
 let resultado = Conta (n);
 function Conta(num){
        return (num*2);
}
alert (`O dobro de ${n} é ${resultado}`);

//exer6
function conta() {
    let num1 = prompt ('Informe o primeiro número:');
    let num2 = prompt ('Informe o segundo número:');
    let num3 = prompt ('Informe o terceiro número:');
    let media = 0;
 
function Numeros() {
    media = (num1 + num2 + num3) / 3;
    return media;
}
 let resultadoMedia = Numeros()
console.log(resultadoMedia);
}

//exer7
let num1 = parseInt(prompt("Digite um número"));
let num2 = parseInt(prompt("Digite outro número"));
 
function Maior() {
    if (num1 > num2) {
        return `O ${num1} é maior que ${num2}`;
    } else {
        return `O ${num1} é menor que ${num2}`;
    }
}
 
let resultado2 = Maior();
console.log(resultado);

//exer8
let num11 = parseInt(prompt("Digite um número"));
let numero;
 
function mult() {
    numero = num1 * num1;
    return numero;
}
 
let resultado1 = mult();
console.log(resultado);