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
/*function kia() {
    var vendedor = new Array(10);
    var comision_ven = new Array(10);
    let i = 1;
    let nombre = "";
    let venta = "";
    while (i <= 3) {
        nombre = parseInt(prompt("KIA" + "\nIngrese el nombre del vendedor:"))
        for (let x = 0; x <= vendedor.length; x++) {
            vendedor[x] = nombre;
            console.log(vendedor[i])
        }
        venta = parseInt(prompt("Ingrese el importe total de venta"))
        if (venta >= 100000 && 300000) {
            comision = venta * 0.03;
        } else if (venta >= 3000000 && venta < 5000000) {
            comision = venta * 0.04;
        } else if (venta >= 5000000 && venta < 7000000) {
            comision = venta * 0.05;
        } else if (venta >= 7000000) {
            comision = venta * 0.06;
        } else if (venta < 1000000) {
            document.writeln("El vendedor no tiene comisiones")
        }
        i++;
        comision_ven[comision];
    }
    i = 1;
    comision_ven[comision];
    document.writeln("")
    document.writeln(" COMISIONES VENDEDORES ")
    document.writeln("-----------------------------------------------------")
    while (i <= 3) {
        document.writeln("Nombre vendedor: " + vendedor + " Comision: " + comision_ven)
        document.writeln("-----------------------------------------------------")
        i++;
    }
    document.writeln("-----------------------------------------------------")
} // NO FUNCIONO :(
*/
function candidatos() {
    let ganador = 0;
    let total = 0;
    let candidato1 = 0;
    let candidato2 = 1;
    let candidato3 = 2;
    let contador1 = 0;
    let contador2 = 0;
    let contador3 = 0;
    for (let x = 0; x <= 49999; x++) {
        let votos = getRandomInt(3);
        if (votos == candidato1) {
            contador1++;
        } else if (votos == candidato2) {
            contador2++;
        } else if (votos == candidato3) {
            contador3++;
        }
    }
    total = contador1 + contador2 + contador3;
    if (contador1 > contador2 && contador1 > contador3) {
        ganador = candidato1 + 1;
        document.writeln("El ganador es el candidato : #" + ganador + " con " + contador1 + " votos")
    } else if (contador2 > contador1 && contador2 > contador3) {
        ganador = candidato2 + 1;
        document.writeln("El ganador es el candidato : #" + ganador + " con " + contador1 + " votos")
    } else if (contador3 > contador1 && contador3 > contador2) {
        ganador = candidato3 + 1;
        document.writeln("El ganador es el candidato : #" + ganador + " con " + contador1 + " votos")
    }
    if (contador1 == contador2) {
        document.writeln("<br>" + "Los candidatos #" + candidato1 + 1 + " y " + candidato2 + " quedaron empatados con: " + contador1)
    } else if (contador1 == contador3) {
        document.writeln("<br>" + "Los candidatos #" + candidato1 + 1 +" y " + candidato3 + " quedaron empatados con: " + contador1)
    } else if (contador2 == contador3) {
        document.writeln("<br>" + "Los candidatos #" + candidato2 + 1 +" y " + candidato3 + " quedaron empatados con: " + contador2)
    } else if (contador1 == contador2 == contador3){
        document.writeln("<br>" + "Los candidatos #" + candidato1 + 1 +", "+ candidato2 + 1 + "y " + candidato3 + 1 + " quedaron empatados con: " + contador2)
    }
    document.writeln("<br>" + "El total de votos fue: " + total + " votos")
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);

}
/*
function primos() {

    let num = 0;
    let contador = 0;
    let sumatoria = [];
    let primos = [];
    while (true) {
        num = parseInt(prompt("Ingrese un numero entero"))
        if (num > 0) {
            for (let i = 2; i <= num; i++) {
                let cont = 2;
                let prime = true;
                while (prime && cont < i) {
                    if (i % cont == 0) {
                        prime = false;
                    } else {
                        cont++;
                    }
                }
                if (prime) {
                    primos[i];
                }
            }
            for (let i = 0; i < num; i++) {
                sumatoria[i] = Math.pow((i + 1), num);
                document.write((i + 1) + "^" + num + " = " + sumatoria[i] + "<br>");
                contador = contador + sumatoria[i];
            }
            { break; }
        } else {

            document.write("Numero invalido, vuelva a digitar un numero")
        }
    }
    document.write("Los numeros primos de: " + num + " son: " + i)
    document.write("<br>" + "La sumatoria del numero " + num + " es: " + contador);
}
*/
/*
function fibonacci() {

    let num2 = parseInt(prompt("Digite un numero entero positivo"))
    let fib = [0, 1];
    for (let i = 2; i < num2; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    for (let index = 0; index < fib.length; index++) {
        document.write(fib[index] + "<br>")
    }
}
*/
function mcd() {
    let num1 = 0;
    let num2 = 0;
    let a = 0;
    let b = 0;
    let res = 0;
    num1 = parseInt(prompt("Ingrese el primer numero"))
    num2 = parseInt(prompt("Ingrese el segundo numero"))
    if (num1 > num2) {
        a = num1;
        b = num2;
    } else {
        a = num2;
        b = num1;
    }
    while (b != 0) {
        res = b;
        b = (a % b);
        a = res;
    }
    document.write("El M.C.D. entre " + num1 + " y " + num2 + " es:")
    document.write("<br>" + res)
}
function ciudad() {
    let c = 0;
    let d = 0;
    let a= 25000000.0;
    let b = 19900000.0;
    while (b<a){
        a = a+(a * 0.2);
        b = b+(b * 0.3);
        c++;
    }
    d=1994+c;
    document.writeln("La poblacion del pais B supera a la del pais A en el año: "+d)
}