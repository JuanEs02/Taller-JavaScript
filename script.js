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
function zoo() {

    let n;
    let total = 0;
    let edad = 0;
    let categoria1 = 0;
    let categoria2 = 0;
    let categoria3 = 0;
    let animal;

    n = parseInt(prompt("Elige 1-3 según el tipo de animal" + "\n1- Elefantes" + "\n2- Jirafas" + "\n3- Chimpances"))

    if (n > 0 && n < 4) {
        if (n == 1) {
            animal = "Elefantes";
            total = 20;
        } else if (n == 2) {
            animal = "Jirafas";
            total = 15;
        } else {
            animal = "Chimpances";
            total = 40;
        }
        for (let x = 1; x <= total; x++) {
            edad = parseInt(prompt("Ingrese la edad"))
            if (edad >= 0 && edad <= 1) {
                categoria1++;
            } else if (edad < 3) {
                categoria2++;
            } else {
                categoria3++;
            }
        }
    }

    document.write("Porcentaje de edades de " + animal);
    document.writeln("<br>" + (categoria1 / total) * 100 + "% de 0 a 1 año\n");
    document.writeln("<br>" + (categoria2 / total) * 100 + "% de mas de 1 año y menos de 3");
    document.writeln("<br>" + (categoria3 / total) * 100 + "% de 3 año o más");
}
