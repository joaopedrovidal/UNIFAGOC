// JavaScript
// Informe a função

function calcular(){

// Definior as variáveis 

    let valor = parseFloat(document.getElementById("valor").value);
    let horas = parseFloat(document.getElementById("horas").value);

// Calcular o valor salarial

    let valorsalarial = (valor * horas);

// Exibir valor salarial

    document.getElementById("resultado").innerHTML = "O valor salarial é de R$: " + valorsalarial;
}