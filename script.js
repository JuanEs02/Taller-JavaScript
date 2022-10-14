function Autos() {
    let cantidad_autos = 0;
    cantidad_autos = parseInt(prompt("Ingrese la cantidad de autos"))
    let placa;
    let contador1 = 0;
    let contador2 = 0;
    let contador3 = 0;
    let contador4 = 0;
    let contador5 = 0;
    let contador = 0;
    let aux;
    while (cantidad_autos !== contador) {
        placa = prompt("Ingrese la placa del auto")
        aux = placa.substring(placa.length - 1, placa.length)
        if (aux == "1" || aux == "2") {
            contador1++
        } else if (aux == "3" || aux == "4") {
            contador2++
        } else if (aux == "5" || aux == "6") {
            contador3++
        } else if (aux == "7" || aux == "8") {
            contador4++
        } else if (aux == "9" || aux == "0") {
            contador5++
        }
        contador++
    }
    document.write("Amarillos: " + contador1 + "\n");
    document.writeln("<br>" + "Rosas: " + contador2 + "\n");
    document.writeln("<br>" + "Rojos: " + contador3 + "\n");
    document.writeln("<br>" + "Verdes: " + contador4 + "\n");
    document.writeln("<br>" + "Azules: " + contador5 + "\n");
    document.writeln("<br>" + "Total de autos: " + contador);
}

