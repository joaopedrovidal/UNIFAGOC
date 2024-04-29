function calculararea(){

// Solicita ao usuário que insira o raio do círculo

let raio = parseFloat(document.getElementById("raio").value);

// Calcula a área do círculo

let area = Math.PI * Math.pow(raio, 2);

// Mostra a área do círculo

document.getElementById("resultado").innerHTML = "A area do círculo é: " + area;
}