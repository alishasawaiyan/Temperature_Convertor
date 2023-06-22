var celsiusInput = document.getElementById("celsius");
var fahrenheitInput = document.getElementById("fahrenheit");

function convertFahrenheit() {
    var celsius = parseFloat(celsiusInput.value);
    var fahrenheitResult = (1.8 * celsius) + 32;
    var a = fahrenheitResult.toFixed(2);

    fahrenheitInput.value = a;
}

function convertCelsius() {
    var fahrenheit = parseFloat(fahrenheitInput.value);
    var celsiusResult = (fahrenheit - 32) / 1.8;
    var b = celsiusResult.toFixed(2);

    celsiusInput.value = b;
}
