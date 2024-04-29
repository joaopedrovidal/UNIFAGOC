function calcular(){

    let celsius = parseFloat(document.getElementById("celsius").value);

    let Fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("resultado").innerHTML = "A temperatura em graus Fahrenheit é: " + Fahrenheit;
}