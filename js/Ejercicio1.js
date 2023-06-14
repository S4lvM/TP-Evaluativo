let tempEnero = [28, 29, 30, 31, 30, 29, 27, 26, 27, 28, 29, 31, 32, 32, 31, 29, 28, 27, 27, 26, 25, 25, 24, 25, 26, 27, 28, 29, 30, 29];
document.getElementById("arregloCompleto").innerText = tempEnero;

let primerElemento = tempEnero[0];
document.getElementById("primerElemento").innerText = primerElemento;


let ultimoElemento = tempEnero[tempEnero.length - 1];
document.getElementById("ultimoElemento").innerText = ultimoElemento;


let longitudArreglo = tempEnero.length;
document.getElementById("longitudArreglo").innerText = longitudArreglo;


let promedioMensual = tempEnero.reduce((sum, value) => sum + value, 0) / tempEnero.length;
let diasCalidos = tempEnero.filter(temperatura => temperatura > promedioMensual);
document.getElementById("diasCalidos").innerText = diasCalidos.join(", ");


tempEnero.push(promedioMensual);
document.getElementById("promFinal").innerText = tempEnero;

diasCalidos.unshift(promedioMensual);
document.getElementById("promInicio").innerText = diasCalidos;