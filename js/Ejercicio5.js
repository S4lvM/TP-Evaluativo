let grupoTP = [
    {Nombre:"Arias, Camila", Nota:8},
    {Nombre:"Coz, Lucas", Nota:7},
    {Nombre:"Suarez, Rocio", Nota:9},
    {Nombre:"Salva, Mauro", Nota:8}
];


var sumNotas=0;
var notaAlta= -Infinity;
var notaBaja= Infinity;

document.write("<h2>a. Elementos del arreglo y el promedio de notas</h2>")
for (i=0;i<grupoTP.length;i++){
    document.write("<p>"+grupoTP[i].Nombre+" "+grupoTP[i].Nota+"</p>");
    sumNotas+=grupoTP[i].Nota;

    if (grupoTP[i].Nota > notaAlta) {
        notaAlta = grupoTP[i].Nota;
    }

    if (grupoTP[i].Nota < notaBaja) {
        notaBaja = grupoTP[i].Nota;
    }  
}
let prom=sumNotas/grupoTP.length;
document.write("<p>Promedio de notas: "+prom+"</p><br>");
document.write("<h2>b. Nota mas alta y la nota mas baja</h2>")
document.write("<p>Nota más alta: "+notaAlta+"</p>");
document.write("<p>Nota más baja: "+notaBaja+"</p>");