const prompt = require('prompt-sync')();

function principal(){


while(true){
menu()   
let operacao = prompt('Digite a operação: ').toLowerCase();

if (operacao === "sair"){
    console.log("Saindo do programa...")
    break;
}

let num1 = +prompt("Digite o primeiro número para realizar a conta: ")
let num2 = +prompt("Digite o segundo número para realizar a conta: ")

num1 = parseFloat(num1)
num2 = parseFloat(num2)


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
 let continuar = paraContinuar()
 if (continuar !== "s"){
    console.log("Saindo do programa...")
    break;
 }
 }
}
function paraContinuar(){
    let continuar
    while(true){
        continuar = prompt("Deseja realizar outra operaçao? (s/n)").toLocaleLowerCase();
        if (continuar === 's' || continuar === "n" ){
            break;
        }  else {
            console.log("Por favor, digite 's' para continuar  ou 'n' para encerrar o programa")
        }

    } 
    return continuar;
   
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

  principal();