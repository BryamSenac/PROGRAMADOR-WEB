// Aula 7 - Vetores e Objetos
// com FOR e Arrays

//VETORES/ARRAYS
let valores = [5, 2, 8, 3, 1, 4, 9, 6, 7];
for(let i = 0; i < valores.length; i++){
    valores[i] -= (valores[i] * 0.15);
    console.log(valores[i]);
}

//Crie um questionario avaliativo com 10
//questões sobre o uso de vetores/arrays em
//JS manipulados com for, foque nas funções
//length, slice e push, e na manipulção dos
//dados, crie questões teóricas e práticas
//com acerte a saída e encontre o erro!

//OBJETOS

const carros = [
    { titulo: 'Carro 1', preco: '5,00' },
    { titulo: 'Carro 2', preco: '51,00' },
    { titulo: 'Carro 3', preco: '15,00' },
    { titulo: 'Carro 4', preco: '20,00' },
    { titulo: 'Carro 5', preco: '12,50' },
];
if(true){
    carros[2].titulo = "Amarok";
}
carros.map((carro)=>{
    console.log(carro.titulo);
})