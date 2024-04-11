//exer 2
let p = prompt ('digite seu peso');
let h = prompt ('digite sua altura');
function imc (p1,h1){
    return (p1/(h1*h1))
}
let IMC = imc(p,h)
alert (`${IMC.toFixed(2)}`)

//exer 3
let num = prompt ('digite um numero');
function fAtorial(num1){
    if(num == 1 || 0){
        alert ('O fatorial desse numero é 1')
    }else{
        numero = 1
        for(let i = num1; i>1 ; i-- ){
            numero *= i;
        }
    return numero
    }  
   
   
}
let fatorial = fAtorial(num);
alert (`A fatorial desse numero é ${fatorial}`);

//exer 4
let reais = prompt ('digite um valor em reais para converter para dolares');
function conversor (reias1){
    return (reias1*4.80)
}
let convertido = conversor(reais)
alert (`O valro em reais convertido para dolares é de ${convertido.toFixed(2)}`);

//exer 5
let lado1 = parseInt(prompt ('digite o valor de um lado'))
let lado2 = parseInt(prompt ('digite o valor da base'))
let lado3 = parseInt(prompt ('digite o valor da outra base'))
let lado4 = parseInt(prompt ('digite o valor do outro lado'))
function areu (ladoA,ladoB){
    return (ladoA*ladoB)
}
let area1 = areu (lado1, lado2)
 
function perimetrou(lado5,lado6,lado7,lado8){
    return (lado5+lado6+lado7+lado8)
}
let perimetro1 = perimetrou(lado1,lado2,lado3,lado4)
alert(`A area da sala é ${area} e o seu perimetro é ${perimetro}`);

//exer 6
let raio = prompt ('Digite o raio da sala')
function perimetrou (raio1){
    return (2*(3.14*raio1))
}
let perimetro = perimetrou(raio)
 
function areau (raio2){
    return (3.14*raio2^2)
}
let area = areau (raio)
alert(`O perimetro da sala é ${perimetro} e sua Area é ${area}`);

//exer 7
let numm = parseInt(prompt("Digite o valor do número que deseja saber a tabuada:"));
let contador = 1
let resultado;
function tabuada(n){
    while(contador<=10){
    resultado = n*contador
    alert(`${n}x${contador}=${resultado}.`);
    contador++
    }
}
tabuada(num);