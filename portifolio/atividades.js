for(let volta = 0; volta < 50; volta++){
    console.log(volta + 1);
}

let volta = 0;
while(volta <50){
    volta++;
    console.log(volta);
}


let n_escolhido = 8;
for(let i = 0; i < 10; i++){
    console.log((n_escolhido) + " x " + (i + 1) + " = " +  (n_escolhido * (i + 1)))
}


for(let volta = 50; volta > 0; volta--){
    console.log(volta);
}

let volta = 50;
while(volta > 0){
    console.log(volta);
    volta--;
}


let n_escolhido = 29;
for (let valor_par = 0; valor_par <= n_escolhido; valor_par = valor_par + 2){
    console.log(valor_par)
}


let volta = 15;
let fatorial = 1;
while(volta > 0){
    fatorial = fatorial * volta;
    volta--;
}
console.log(fatorial);