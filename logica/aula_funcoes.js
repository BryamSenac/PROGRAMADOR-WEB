//Aula 10 e 11 - Funções

const calcular_media = (notas)=>{
    let nota_final = 0;
    for(let i = 0; i < notas.length; i++){
        nota_final += notas[i];
    }
    nota_final /= notas.length;
    return nota_final;
}

function consultar_status(nota_final){
    if(nota_final >= 6){
        return "APROVADO";
    }else{
        return "REPROVADO";
    }
}

const notas_aluno1 = [9, 5, 3, 5, 9];
let nota_final_aluno1 = calcular_media(notas_aluno1);
console.log(`Aluno 1 tem média igual a ${nota_final_aluno1} ele está ${consultar_status(nota_final_aluno1)}`);
const notas_aluno2 = [8, 7, 10];
let nota_final_aluno2 = calcular_media(notas_aluno2);
console.log(`Aluno 1 tem média igual a ${nota_final_aluno2} ele está ${consultar_status(nota_final_aluno2)}`);
const notas_aluno3 = [2, 8, 4, 5];
let nota_final_aluno3 = calcular_media(notas_aluno3);
console.log(`Aluno 1 tem média igual a ${nota_final_aluno3} ele está ${consultar_status(nota_final_aluno3)}`);
