const prompt = require('prompt-sync')();

while(true){
// Pedindo ao usuário para digitar seu nome
let operacao = prompt('Digite a operação que você deseja realizar:(Adição, Subtração, Multiplicação, Divisão, Porcentagem) ');
let num1 = +prompt("Digite o primeiro número para realizar a conta: ")
let num2 = +prompt("Digite o segundo número para realizar a conta: ")
let resposta = 0;

if (operacao === "sair"){
    console.log("Saindo do programa")
    break;
}



// Exibindo a saudação com o nome fornecido
//console.log(`Olá, ${nome}!`);


    switch (operacao) {

        case "Adição":
            resposta = num1 + num2 
            console.log("O resultado da adição é: " + resposta)
            break;
        case "Subtração":
            resposta = num1 - num2 
            console.log("O resultado da subtração é: "+ resposta)
            break;
        case "Multiplicação":
            resposta = num1 * num2 
            console.log("O resultado da Multiplicação é: " + resposta)
            break;  
        case "Divisão":
            resposta = num1 / num2 
            console.log("O resultado da divisão é: "+resposta)
            break;      
        case "Porcentagem":
            resposta(num1 * 100) / num2;
            console.log("O resultado da porcentagem de ",resposta, " de " + num1 + " é " + num2)
            break;     
    
        default:
         console.log("Digite uma operação valida!")
    
            break;
    }
    break;
}


function menu() {
    console.log("O que deseja?");
    console.log("1. Adição");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Porcentagem")
    console.log("6. Sair do programa")
  }