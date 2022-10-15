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
function salario() {
    let x = 1;
    let n = 0;
    let horas = 0;
    let hora_extra = 0;
    let ssalario = 0;
    n = parseInt(prompt("Ingresa la cantidad de trabajadores"))
    while (x <= n) {
        horas = parseInt(prompt("Ingresa el número de horas trabajadas"))
        if (horas <= 40) {
            ssalario = horas * 20;
        } else {
            hora_extra = horas - 40;
            ssalario = 40 * 20 + (hora_extra * 25);
        }
        document.writeln("El salario del trabajador: " + x + " es: $" + ssalario + "\n");
        x++;
    }
}
function edades() {
    let sexo = 0;
    let alumnos = 0;
    let x = 1;
    let numero_hombres = 0;
    let edad_hombres = 0;
    let promedio_hombres = 0.0;
    let numero_mujeres = 0;
    let edad_mujeres= 0;
    let promedio_mujeres = 0.0;
    alumnos = prompt("Ingresa una cantidad de alumnos")
    while (x <= alumnos) {
        edad = parseInt(prompt("Ingrese la edad"))
        sexo = prompt("Elige 1 o 2 para el sexo" + "\n1. Hombre" + "\n2. Mujer")
        if (sexo == 1) {
            edad_hombres = edad_hombres + edad;
            numero_hombres++;
            promedio_hombres = edad_hombres / numero_hombres;
        } else if (sexo == 2) {
            edad_mujeres = edad_mujeres + edad;
            numero_mujeres++;
            promedio_mujeres = edad_mujeres / numero_mujeres;
        }
        x++;
    }

    let suma_edades = edad_hombres + edad_mujeres;
    let promedio = suma_edades/ alumnos;

    document.write("El promedio de edades de todo el grupo es: " + promedio);
    document.writeln("<br>"+"El promedio de edades de hombres del grupo es: " + promedio_hombres);
    document.writeln("<br>"+"El promedio de edades de mujeres del grupo es: " + promedio_mujeres);
}
function menor() {
    let menor = 0;
    let numero_nuevo = 1;
    let cantidad_num = 0;
    let x = 1;
    cantidad_num = parseInt(prompt("Determinar el minimo de una cadena de numeros\n" + "\n" + "Ingrese la cantidad total de numeros:"))
    while (x <= cantidad_num) {
        numero_nuevo = parseInt(prompt("Ingrese un numero:"))
        if (x == 1) {
            menor = numero_nuevo;
        } else if (numero_nuevo < menor) {
            menor = numero_nuevo;
        }
        x++;
    }
    document.write("El número menor es: " + menor)
}
function obesidad() {

    let peso_anterior;
    let peso = 0;
    let suma = 0;

    for (let x = 1; x <= 5; x++) {
        peso_anterior = parseInt(prompt("Persona #" + x + "\nIngresa el peso anterior"))

        for (let a = 1; a <= 10; a++) {
            peso = parseInt(prompt("Ingresa el peso #" + a))
            suma = suma + peso;
        }
        if (suma / 10 == peso_anterior) {
            document.writeln("La persona #" + x + " se mantiene en el peso")
        } else {
            if (suma / 10 > peso_anterior) {
                document.writeln("<br>"+"La persona #" + x + " SUBIO")
            } else {
                document.writeln("<br>"+"La persona #" + x + " BAJO")
            }
        }
        document.write(" ")
    }
}
function supermercado() {

    let cantidad = 0;
    let total = 0;
    let precio = 0;
    cantidad = parseInt(prompt("Ingrese la cantidad total de articulos"))

    for (let x = 0; x < cantidad; x++) {

        precio = parseInt(prompt("Ingrese el precio del articulo #" + (x + 1)))
        total = total + (cantidad * precio);
    }

    document.writeln("El total a pagar por los productos es: $" + total)

}
function teatro() {

    let edad = 0;
    let respuesta = "";
    let precio = 0;
    let descuento = 0;
    let categoria1 = 0;
    let categoria2 = 0;
    let categoria3 = 0;
    let categoria4 = 0;
    let categoria5 = 0;
    let total = 0;
    precio = parseFloat(prompt("Ingresa el precio del boleto"))
    do {
        edad = prompt("Ingrese la edad")
        if (edad < 5) {
            document.writeln("No se permiten menores de 5 años.")
        } else if (edad <= 14) {
            descuento = precio * 0.35;
            categoria1 = categoria1 + descuento;
        } else if (edad <= 19) {
            descuento = precio * 0.25;
            categoria2 = categoria2 + descuento;
        } else if (edad <= 45) {
            descuento = precio * 0.10;
            categoria3 = categoria3 + descuento;
        } else if (edad <= 65) {
            descuento = precio * 0.25;
            categoria4 = categoria4 + descuento;
        } else {
            descuento = precio * 0.35
            categoria5 = categoria5 + descuento;
        }
        document.writeln("<br>" + "El descuento aplicado para los " + edad + " años es: $" + descuento)
        total = total + descuento;
        respuesta = prompt("Desea continuar? (SI/NO)")
    } while (respuesta == "si" || respuesta == "SI" || respuesta == "Si" || respuesta == "sI")
    document.writeln("<br>" + "El descuento total en la categoria 1 es de: $" + categoria1)
    document.writeln("<br>" + "El descuento total en la categoria 2 es de: $" + categoria2)
    document.writeln("<br>" + "El descuento total en la categoria 3 es de: $" + categoria3)
    document.writeln("<br>" + "El descuento total en la categoria 4 es de: $" + categoria4)
    document.writeln("<br>" + "El descuento total en la categoria 5 es de: $" + categoria5)
    document.writeln("<br>" + "El descuento total: $" + total)
}