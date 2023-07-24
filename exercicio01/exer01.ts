import promptSync from "prompt-sync"

import { exercicio02 } from "./exer02";

import { exercicio03 } from "./exer03";

import { exercicio04 } from "./exer04";

import { exercicio05 } from "./exer05";

import { exercicio06 } from "./exer06";


let prompt = promptSync()

let resposta;



do {

    let resposta :number|string;

    console.log("Bem vindo ao menu de exercicios")

    resposta = prompt( "Digite um numero de 1 a 6, para escolher um exercicio ou sair para interromper o programa: ")

    switch(resposta) {
        case"1":
        console.log ("Você escolheu o exercicio 1")
        exercicio02()

        break;

        case"2":
        console.log ("Você escolheu o exercicio 2")
        exercicio03()
        break;

        case"3":
        console.log ("Você escolheu o exercicio 3")
        exercicio04()
        break;

        case"4":
        console.log ("Você escolheu o exercicio 4")
        exercicio05()
        break;

        case"5":
        console.log ("Você escolheu o exercicio 5")
        exercicio06
        break;

        //case"6":
        //console.log ("Você escolheu o exercicio 6")
        //exercicio07
        //break;

        default:

        console.log(" Você agora vai sair do menu de exercicios")

        break;




    }

    
} while (resposta != "sair");