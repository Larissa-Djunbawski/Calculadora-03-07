const prompt = require('prompt-sync')();

while(true){
menu()   
let operacao = prompt('Digite a operação: ').toLowerCase();

if (operacao === "sair"){
    console.log("Saindo do programa...")
    break;
}

let num1 = +prompt("Digite o primeiro número para realizar a conta: ")
let num2 = +prompt("Digite o segundo número para realizar a conta: ")


if (isNaN(num1) || isNaN(num2)){
  console.log("Digite um número válido")
  continue;
}
let resposta = 0;
   switch (operacao) {
        case "soma":
        case "adicao":
        case "adição":
            resposta = num1 + num2 
            console.log("O resultado da adição é: " + resposta)
            break;
        case "subtração":
        case "subtracao":
            resposta = num1 - num2 
            console.log("O resultado da subtração é: "+ resposta)
            break;
        case "multiplicação": 
        case "multiplicacao":
            resposta = num1 * num2 
            console.log("O resultado da Multiplicação é: " + resposta)
            break;  
        case "divisão":
        case "divisao":
            resposta = num1 / num2 
            console.log("O resultado da divisão é: "+resposta)
            break;      
        case "porcentagem" :
            resposta = (num1 * num2) / 100;
            console.log(num1, "por cento de", num2, "é: ", resposta)
            break;     
    
        default:
         console.log("Digite uma operação valida!")
         menu()
         break;
    }
    let continuar = prompt("Deseja realizar outra operaçao? (s/n)").toLocaleLowerCase();
    if (continuar !== 's'){
        console.log("Saindo do programa...")
        break;
    } 
}


function menu() {
    console.log("O que deseja?");
    console.log("Adição");
    console.log("Subtração");
    console.log("Multiplicação");
    console.log("Divisão");
    console.log("Porcentagem")
    console.log("'Sair' para  sair do programa")
  }