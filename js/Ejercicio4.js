let tempEnero = [25, 26, 24, 25, 29, 30, 20];
let promedioTemp = 0;
let primerDiaPromedio = -1;
let diasPromedio = [];
let sum = tempEnero.reduce((total, temp) => total + temp, 0);
promedioTemp = sum / tempEnero.length;


for (let i = 0; i < tempEnero.length; i++) {
  if (tempEnero[i] === promedioTemp) {
    primerDiaPromedio = i + 1;
    break;
  }
}


for (let i = 0; i < tempEnero.length; i++) {
  if (tempEnero[i] === promedioTemp) {
    diasPromedio.push(i + 1);
  }
}
document.write("a. El primer día con temperatura promedio igual al promedio mensual es el día " + primerDiaPromedio);
document.write("<br>")

if (diasPromedio.length > 0) {
  document.write("b. Los días con temperatura promedio igual al promedio mensual son: " + diasPromedio.join(", "));
} else {
  document.write("b. No se encontraron días con temperatura promedio igual al promedio mensual.");
}
