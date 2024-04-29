// Declare a função

    function calcular(){
    
// Declare as variáveis

    let Fahrenheit = parseFloat(document.getElementById("Fahrenheit").value);

// Transforme graus Fahrenheit em graus Celsius: fórmula C = 5 * ((F - 32) / 9)

    let celsius = 5 * ((Fahrenheit - 32) / 9);

// Exiba o resultado em graus Celsius

    document.getElementById("resultado").innerHTML = "O resultado em graus Celsius é: " + celsius;
}