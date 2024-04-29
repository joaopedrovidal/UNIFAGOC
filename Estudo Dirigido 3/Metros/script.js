// JavaScript
// Solitando o valor em metros
function calcular(){
    
let metros = parseFloat(document.getElementById("metros").value);

// Convertendo o valor de metros para centímeros

let centimetros = metros * 100;

// Mostrando o valor de metros em centímetros

let resultado = document.getElementById("resultado");
resultado.innerHTML =  (centimetros);
}