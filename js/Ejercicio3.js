var diasSemana = {
    1: "Domingo",
    2: "Lunes",
    3: "Martes",
    4: "Miércoles",
    5: "Jueves",
    6: "Viernes",
    7: "Sábado"
};


function obtenerDia(numDia) {
    if (numDia === 1 || numDia === 7) {
        return "Es fin de semana";
    } else {
        return "Es día de clases";
    }
}


function obtenerDiaSemana() {
    var numDiaInput = document.getElementById("numDia");
    var numDia = parseInt(numDiaInput.value);


    if (numDia >= 1 && numDia <= 7) {
        var dia = diasSemana[numDia];
        var estadoDia = obtenerDia(numDia);


        var output = "El número " + numDia + " representa el día " + dia + ".<br>";
        output += estadoDia;
        document.getElementById("output").innerHTML = output;
    } else {
        document.getElementById("output").innerHTML = "El número ingresado no es válido. Debe ser un número del 1 al 7.";
    }


    return false;
}