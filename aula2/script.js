//Questão 1
let nivelAcesso = 2;

if (nivelAcesso === 3) {
  console.log("Acesso Total");
} else if (nivelAcesso === 2) {
  console.log("Acesso Parcial");
} else {
  console.log("Acesso Negado");
}

//Questão2
let nota = 6

switch (nota) {
    case 10:
        console.log("Nota Máxima");
        break;
    case 9: 
    case 8:
        console.log("Muito Bom");
        break;
    case 7:
    case 6:
        console.log("Bom");
        break;
    case 5:
        console.log("Regular");
        break;
    default:
        console.log("Nota Insuficiente");
        break;
}

//Questão 3
for(let i = 1; i<=10; i++) {
    console.log(i);
}

//Questão 4
let cont = 1
let resultado = 0
while (cont <= 5) {
    resultado = resultado + cont
    cont++
    console.log(resultado)    
}
