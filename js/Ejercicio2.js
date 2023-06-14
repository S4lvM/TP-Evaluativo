var palabras = ['Hola', 'mundo', 'soy', 'yo'];
var mostrar = '';


for (var i = 0; i < palabras.length; i++) {
    mostrar = mostrar.concat(palabras[i], ' ');
    document.write(mostrar);
}
document.write(" 1");
document.write("<br>");
document.getElementById("concatenar").textContent = mostrar.trim();

var palabras1 = ['Hola', 'mundo', 'soy', 'yo' ];
var mostrar1 = [];


for (var i = 0; i < palabras1.length; i++) {
    mostrar1.push(palabras1[i]);
    document.write(mostrar1);
}

document.write(" 2");
document.getElementById("pusheo").textContent = mostrar1.join(' ');