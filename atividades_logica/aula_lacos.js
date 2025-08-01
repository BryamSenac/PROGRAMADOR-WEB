// Aula 5 e 6 - Laços de Repetição
// com FOR e WHILE

const senha = "12345678";

while (senha !== "12345678") {
    console.log("Senha incorreta! Tente novametne");
}
console.log("Senha incorreta!");


for(let i = 0 ; i< 15 ; i++){
    console.log(i+ 1);
}

//1. Crie dois programas que imprimam os números 
// de 1 a 10 usando um laço for e while.

for(let i = 0; i < 10; i++){
    console.log(i + 1);
}

let index = 0;
while(index < 10){
    index++;
    console.log(index);
}

//Crie um programa que use um laço for para contar de 10 até 0. 
//A cada número, ele deve imprimir no console.log(): 
//"Contagem: [número]". Quando chegar a 0, deve imprimir 
//"Fim da contagem!".

for(let i = 10; i >= 0; i--){
    console.log("Contagem: " + i);
}
console.log("Fim da contagem!");

//2. Crie um programa que calcule a soma de todos 
//os números pares de 1 a 20 usando um laço 
//while. 

let i = 0;
let soma = 0;
while(i <= 20){
    if( (i % 2) === 0){
        soma = soma + i;
    }
    i++;
}
console.log("Total: " + soma);

//Crie um programa que use um laço while para somar todos
//os números pares de 1 a 50 (inclusive). Ao final, imprima
//o resultado da soma no console.log().

let i = 0;
let soma = 0;
while(i <= 50){
    if( (i % 2) === 0) soma += i;
    i++;
}
console.log("Total: " + soma);

//3. Crie um programa que exiba a tabuada do 
// número 5 (de 5 x 1 até 5 x 10) usando 
// um laço for.

const num = 5;
for(let i = 0; i < 10; i++){
    console.log(num + " x " + (i + 1)  + " = " + (num * (i + 1)))
}

//Crie um programa que declare uma variável numero e atribua 
//a ela um número inteiro (ex: 7). Use um laço for para imprimir 
//a tabuada desse número de 1 a 10 no console.log(). 

const num = 5;
for(let i = 1; i <= 10; i++){
    console.log(`${num} x ${i} = ${num * i}`)
}