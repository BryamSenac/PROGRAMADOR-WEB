// Aula 2, 3 e 4 - Condicionais
// com IF, ELSE e SWITH CASE

let numero = 500;

numero < 150 ? console.log("VERDADE") : console.log("FALSO");

if (numero < 150) {
    console.log("VERDADE");
} else {
    console.log("FALSO");
}


// 1 - Verificador de Idade para Votação:
// Crie um programa que declare uma variável idade e atribua a ela um número. 
// Use condicionais para verificar se a pessoa pode votar. As regras são:
// Se a idade for menor que 16, não pode votar.
// Se a idade for entre 16 e 17 (inclusive), o voto é opcional.
// Se a idade for entre 18 e 69 (inclusive), o voto é obrigatório.
// Se a idade for igual ou maior que 70, o voto é opcional.
// Imprima a mensagem apropriada no console.log() para cada caso.

let idade = 18;
if (idade < 16) {
    console.log("Não pode votar");
} else if (idade >= 18 && idade <= 69) {
    console.log("Voto obrigatório");
} else if ((idade >= 70 && idade <= 150) || (idade >= 16 && idade <= 17)) {
    console.log("Voto opcional");
} else {
    console.log("Idade invalida tente de novo!");
}

// 2 - Classificador de Número:
// Crie um programa que declare uma variável num e atribua a ela um número inteiro. 
// Use condicionais para verificar e imprimir no console.log() se o número é:
// Positivo e Par
// Positivo e Ímpar
// Negativo e Par
// Negativo e Ímpar
// Zero

let num = -23;
if (num > 0) {
    console.log("Positivo");
    if (num % 2 == 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
} else if (num < 0) {
    console.log("Negativo");
    if (num % 2 == 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
} else {
    console.log("É 0");
}

// 3 - Sistema de Mensagens de Status:
// Crie um programa que declare uma variável statusPedido e atribua a ela uma string que pode ser: "pendente", "processando", "enviado" ou "entregue". 
// Use condicionais para imprimir uma mensagem diferente no console.log() para cada status:
// "pendente": "Seu pedido está aguardando confirmação."
// "processando": "Seu pedido está sendo preparado para envio."
// "enviado": "Seu pedido saiu para entrega. Fique atento!"
// "entregue": "Seu pedido foi entregue com sucesso!"
// Qualquer outra string: "Status inválido. Por favor, verifique o código do pedido."

let statusPedidoCC = "pendente";
if (statusPedido === "pendente") {
    console.log("Seu pedido está aguardando confirmação.");
} else if (statusPedido === "processando") {
    console.log("Seu pedido está sendo preparado para envio.");
} else if (statusPedido === "enviado") {
    console.log("Seu pedido saiu para entrega. Fique atento!");
} else if (statusPedido === "entregue") {
    console.log("Seu pedido foi entregue com sucesso!");
} else {
    console.log("Status inválido. Por favor, verifique o código do pedido.");
}

let statusPedido = "asdasd";
switch (statusPedido) {
    case "pendente":
        console.log("Seu pedido está aguardando confirmação.");
        break;
    case "processando":
        console.log("Seu pedido está sendo preparado para envio.");
        break;
    case "enviado":
        console.log("Seu pedido saiu para entrega. Fique atento!");
        break;
    case "entregue":
        console.log("Seu pedido foi entregue com sucesso!");
        break;
    default:
        console.log("Status inválido. Por favor, verifique o código do pedido.");
        break;
}


// PROMPT PARA PRÁTICA
// Faça o papel de um avaliador e crie 20 questões teóricas
// sobre condicionais em JavaScript, aplicando os operadores
// comparativos e lógicos, junto com a função Switch Case e
// o Operador Ternario, crie em formato de perguntas multipa
// escolha.