const prompt = require('prompt-sync')();

function principal(){

while(true){
menu();

let operacao = +prompt('Operação: ')

if (operacao === 6){
    console.log("Saindo do programa")
    break;
}

let num1 = +prompt("Digite o primeiro número : ")
let num2 = +prompt("Digite o segundo número : ")

if (isNaN(num1) || isNaN(num2) ){
    console.log("Digite um número válido!")
    continue;
}

let resposta = 0;


  switch (operacao) {
        case 1:
            resposta = num1 + num2 
            console.log("O resultado da adição é: " + resposta)
            break;
        case 2:
            resposta = num1 - num2 
            console.log("O resultado da subtração é: "+ resposta)
            break;
        case 3:
            resposta = num1 * num2 
            console.log("O resultado da Multiplicação é: " + resposta)
            break;  
        case 4:
            resposta = num1 / num2 
            console.log("O resultado da divisão é: "+resposta)
            break;      
        case 5:
            resposta = (num1 * num2) / 100;
            console.log(num1, "por cento de", num2, "é: ", resposta)
            break;     
    
        default:
         console.log("Operação invalida! Digite um número referente a uma operação: ")
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
    console.log("Digite a operação correspondente");
    console.log("1. Adição");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Porcentagem")
    console.log("6. Sair do programa")
}

principal();