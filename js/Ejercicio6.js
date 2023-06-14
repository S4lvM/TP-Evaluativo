document.write("<p>Primero cargamos los codigos de los articulos</p>");
let listaArticulos = [];
var codigo = parseInt(prompt("Ingrese el codigo del articulo a cargar (finalice la carga ingresando 0)"));
while (codigo!=0){
    listaArticulos.push(codigo);
    var codigo = parseInt(prompt("Ingrese el codigo del articulo a cargar(finalice la carga ingresando 0)"));
}
listaArticulos.push(0);
document.write("<p>Codigos cargados: "+listaArticulos+"</p><br>");

document.write("<p>Ahora buscamos el codigo</p>");
var buscarCOD = parseInt(prompt("Ingrese el codigo a buscar"));
document.write("<p>Codigo a buscar: "+buscarCOD+"</p>");
for (i=0;i<listaArticulos.length;i++){
    if (buscarCOD===listaArticulos[i]){
        document.write("Codigo encontrado en la posicion: "+i);
        break
    }
}
