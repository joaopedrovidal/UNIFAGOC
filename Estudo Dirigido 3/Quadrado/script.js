// Determinar a função
// JavaScript

function calcular(){

// Informar o valor dos lados do quadrados

    let lado = parseInt(document.getElementById("lado").value);

// Calcular a área do quadrado (fórmula matemática para calcular a área do quadrado: lado * lado)

    let area = (lado * lado);

// Calcular o sobro da área do quadrado

    let dobroarea = (area * 2);

// Informe o resultado

    document.getElementById("resultado").innerHTML = "O dobro da área do quadro é: " + dobroarea;
}
