//exer 3
// function mensagemNoConsole() {
//     console.log ("Olá, mundo!");
// }

//exer 4
// let nome = prompt ("Informe o seu nome:");

// function mensagemNoConsole(parNome) {
//     console.log (`Olá, ${parNome}!` );
// }

// mensagemNoConsole(nome);
// mensagemNoConsole("Poliana");

//exer 5
// let numero = parseInt(prompt("Digite um número:"));

// function dobroNumero(parNumero) {
//    return parNumero*2;
// }

// let dobro = dobroNumero(numero);
// alert (`O dobro do número é: ${dobro}`);

//exer 6
// let n1 = parseInt(prompt("Digite o primeiro número:"));
// let n2 = parseInt(prompt("Digite o segundo número:"));
// let n3 = parseInt(prompt("Digite o terceiro número:"));
// let media;

// function calcularMedia(parN1, parN2, parN3) {
//     return (parN1+parN2+parN3)/3;
// }

// media = calcularMedia(n1, n2, n3);
// alert (`A média entre os números é: ${media.toFixed(2)}`);

//exer 7
// let num1 = parseInt(prompt("Informe um número:"));
// let num2 = parseInt(prompt("Informe outro número"));

// function maiorNumero(params) {
//     if (parNum1 > parNum2){
//         return parNum1;
//     }
//     else{
//         return parNum2;
//     }
// }

// maior = maiorNumero(num1, num2);
// alert (`O maior número é: ${maior}`);

//exer 8
// let numero = parent(prompt("Digite um número:"));
// let mult;

// function calcularMultiplicacao(parNumero) {
//     return parNumero*parNumero;
// }
// mult = calcularMultiplicacao(numero);
// alert(`O resultado da multiplicação é: ${mult}`);










//exer 2
// let altura = parseFloat(prompt("Digite sua altura:"));
// let peso = parseFloat(prompt("Digite o seu peso:"));

// function calcularIMC(parAltura, parPeso) {
//     return parPeso/(parAltura*parAltura);
// }

// let valorIMC = calcularIMC(altura, peso);
// alert (`O valor do seu IMC é: ${valorIMC.toFixed(2)}`);

//exer 3
// let numero = parseInt(prompt("Digite um número:"));
// let fatorial = 1

// function calcularFatorial(parNumero) {
//     if (parNumero == 1 || parNumero == 0){
//         return 1
//     }
//     else{
//         while (parNumero > 1){
//             fatorial *= parNumero;
//             parNumero--;
//         }
//     }
//     return fatorial;

// }

// let resultado = calcularFatorial(numero);
// alert (`O fatorial do nùmero ${numero}! é: ${resultado}!`);

//exer 4
// let valor = parseFloat(prompt("Digite sua quantidade em dólar que deseja ser convertido:"));
// let dolar = 4.80;

// function conversaoDolar(parValor) {
//     return parValor*dolar;
// }

// let valorReal = conversaoDolar(valor);
// alert (`O valor de U$ ${valor.toFixed(2)} corresponde a R$ ${valorReal.toFixed(2)}`);

//exer 5
// let altura = parseFloat(prompt("Digite a altura do retângulo:"));
// let largura = parseFloat(prompt("Digite a largura do retângulo:"));

// function calcularArea(parAltura, parLargura) {
//     return parAltura*parLargura;
// }

// function calcularPerimetro(parAltura, parLargura) {
//     return (parAltura*2) + (parLargura*2);
// }

// let area = calcularArea (altura, largura);
// let perimetro = calcularPerimetro (altura, largura);

//exer 6
// let raio = parseFloat(prompt("Digite o valor do raio do seu círculo:"));
// let pi = 3.14;

// function calcularArea(parRaio) {
//     return parRaio*parRaio*pi;
// }

// function calcularPerimetro(parRaio) {
//     return (2*pi*parRaio);
// }

// area = calcularArea(raio);
// perimetro = calcularPerimetro(raio);
// alert (`A área do círculo é de ${area} e o seu perímetro é de ${perimetro}`);

//exer 7
// let numero = parseInt(prompt("Digite um número inteiro para calcular a tabuada:"));

// function calcularTabuada(parNumero) {
//     for (let i=0; i<=10; i++){
//         console.log (`${parNumero} X ${i} = ${parNumero*i}`);
//     }
// }

// calcularTabuada(numero)