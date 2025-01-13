// let array = ["Pera", "Uva", "Maça", "Salada mista"]
// for (let index = 0; index < array.length; index++){
//     console.log(`A fruta da rodada do FOR é: ${array[index]}`);
// }

////////////////////////////////////////////////////////////////////

// let faturaCartao = [30, 50, 78]
// let soma = 0;

// for (let index = 0; index < faturaCartao.length; index++) {
//     soma = soma + faturaCartao[index]  
// }
// console.log(soma);

////////////////////////////////////////////////////////////////////

// Contagem dos numeros par:

// for (let index = 0; index <=20; index+=2) {
//     console.log(index);   
// }

////////////////////////////////////////////////////////////////////

// Contagem dos numeros impares

// for (let index = 1; index <= 20; index+=2) {
//     console.log(index);   
// }

////////////////////////////////////////////////////////////////////

// let numero = 7
// for (let index = 1; index < 10; index++) {
//     let mult = numero * index
//     console.log(`${numero} x ${index} = ${mult}`);
    
// }

////////////////////////////////////////////////////////////////////

// const arrayObj = [
//     { id: 1, name: "Elias", role: "Teacher" },
//     { id: 2, name: "Joao", role: "Student" },
//     { id: 3, name: "Lucas", role: "Student" },
//     { id: 4, name: "Jander", role: "Student" },
//     { id: 5, name: "Ander-som", role: "Student" }
//   ];

//   for (let index = 0; index < arrayObj.length; index++) {
//     console.log(arrayObj[index].name); 
//   }

// for (let index = 0; index < arrayObj.length; index++) {
//     if(arrayObj[index].role === "Student"){
//         console.log(arrayObj[index].name);  
//     } 
// }

// contar quantos objetos tem o cargo "Student"

// let soma = 0
// for (let index = 0; index < arrayObj.length; index++) {
//     if (arrayObj[index].role === "Student"){
//         soma +=1
//     }
    
// }
// console.log(soma);

  ////////////////////////////////////////////////////////////////////

//   let estudantes = [
//     { nome: "Mariana", nota: 7.5 },
//     { nome: "Carlos", nota: 4.2 },
//     { nome: "Ana", nota: 8.9 },
//     { nome: "João", nota: 5.0 },
//     { nome: "Fernanda", nota: 6.5 },
//     { nome: "Lucas", nota: 9.3 },
//     { nome: "Raquel", nota: 5.8 },
//     { nome: "Gustavo", nota: 3.4 },
//     { nome: "Isabela", nota: 7.1 },
//     { nome: "Ricardo", nota: 6.0 },
//     { nome: "Clara", nota: 8.2 },
//     { nome: "Felipe", nota: 4.5 },
//     { nome: "Sofia", nota: 6.8 },
//     { nome: "Tiago", nota: 5.5 },
//     { nome: "Patrícia", nota: 9.0 }
//   ];
  
// //Os alunos aprovados tem nota maior ou igual a 7
// for (let index = 0; index < estudantes.length; index++) {
//     if(estudantes[index].nota>=7){
//        console.log(`O aluno ${estudantes[index].nome} está aprovado`) 
//     } else {
//         console.log(`O aluno ${estudantes[index].nome} não está aprovado`)
//     }
// }

// //Os alunos aprovados tem nota maior ou igual a 7 alunos aprovados
// for (let index = 0; index < estudantes.length; index++) {
//     if(estudantes[index].nota>=7){
//        console.log(`O aluno ${estudantes[index].nome} está aprovado`) 
//     } 
    
// }

////////////////////////////////////////////////////////////////////

// LISTA

// Contagem Progressiva:

// Crie um loop que conta de 1 a 10 e imprima cada número no console.

// let numero = 0

// for (let index = 0; index <= 10; index++) {
//     console.log(index);  
// }

// Contagem Regressiva

// let numero = 0

// for (let index = 10; index >= 0; index--) {
//     console.log(index);
     
// }


// Contagem de Números Pares

// let numero = 0
// for (let index = 0; index <= 10; index+=2) {
//     console.log(index);
       
// }

// Utilize um loop para imprimir todos os números pares de 1 a 20 no console.

// let numero = 0
// for (let index = 0; index <= 20; index+=2) {
//     console.log(index);
    
// }

// Contagem de Números Ímpares

// let numero = 0
// for (let index = 1; index <= 20; index+=2) {
//     console.log(index);
       
// }

// Utilize um loop para imprimir todos os números ímpares de 1 a 20 no console.

// for (let index = 1; index <= 20; index+=2) {
//   console.log(index);
// }

// Tabuada de um Número Específico

// let numero = 7
// let numero8 = 8
// for (let index = 1; index <= 10; index++) {
//   let mult = numero * index
//   console.log(`${numero} x ${index} = ${mult}`);

//   // let mult8 = numero8 * index
//   // console.log(`${numero8} x ${index} = ${mult8}`);
// }

// for (let index = 1; index <= 10; index++) {
//   let mult8 = numero8 * index
//   console.log(`${numero8} x ${index} = ${mult8}`);

// }

// Crie um loop que imprime a tabuada do 5 (de 1 a 10) no console.

// let numero5 = 5
// for (let index = 1; index <= 10; index++) {
//   let mult = numero5 * index
//   console.log(`${numero5} x ${index} = ${mult}`);

// }

// Soma de Números

// let numero = 10
// for (let index = 1; index <= 10; index++) {
//   let soma = numero + index
//   console.log(`${numero} + ${index} = ${soma}`);
  
  
// }


// Utilize um loop para somar todos os números de 1 a 100 e imprima o resultado no console.

// let soma = 0
// for (let index = 1; index <= 100; index++) {
//   soma += index;
   
// }
// console.log(soma);


// Média de Números



// Crie um loop que calcula a média de todos os números de 1 a 50 e imprima o resultado no console.

// Fatorial de um Número

// Utilize um loop para calcular o fatorial de um número especificado e imprima o resultado no console.

// Soma de Números Pares

let numero = 0
for (let index = 0; index <= 20; index+=2) {
  numero += index
  
}
console.log(index);


// Crie um loop que calcula a soma de todos os números pares de 1 a 50 e imprima o resultado no console.


// Utilize um loop para verificar e imprimir todos os números primos de 1 a 100.