//Faça um programa que receba um número do usuário e mostre
//no console a contagem regressiva até 0.


import promptSync from "prompt-sync"

let prompt = promptSync()

export function exercicio04() {

    
let numero =  parseFloat( prompt ("Digite um numero: "))

for (let i:number = numero; i >= 0; i--) {
    console.log(i);
    
  }
    
  }