/* console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5) */

// ciclo por conteo FOR
// ejemplo 1 
/* for (let num = 0; num <= 10; num++){
    console.log(num)
} */


// ejemplo 2  con variable
/* let limite = 10

for (let num = 0; num < limite; num++){
    console.log(num)
} */

// ejemplo 3
/* const NUMERO_CALIFICACIONES = prompt ("Ingrese el numero de calificaciones")
let sumatoria = 0   // vairiable para la sumatoria  siempre inicializar en 0
let promedio = 0    // variable la division final  siempre inicializar en 0

for (let index = 1; index <= NUMERO_CALIFICACIONES; index++){
    const CALIFICACION = prompt("Ingrese la calificacion: "+ index) //hasta aqui solo se ingresan el num de calificaciones
    sumatoria = sumatoria + parseFloat(CALIFICACION)
    //console.log(sumatoria)  // imprime la suma de las calificaciones 
}
promedio = sumatoria / NUMERO_CALIFICACIONES
alert("El promedio es: "+ promedio)  // para redondeo  promedio.toFixed(num valores decimales) */

// ejemplo 4   BREAK
/* for (let index = 1; index <= 30; index++){
    const RESIDUO = index % 10
    if (RESIDUO == 0){
        break
    }
    console.log(index + " - "+index % 10) //% el residuo de una division
} */


//  ejmeplo 5  CONTINUE
// escribir un programa que imprima todos los numeros
// pares del 1 al 100
/* for (let index = 1; index >=100; index++){
    const RESIDUO = index % 2
    if (RESIDUO != 0){
        continue
    }
    console.log(index)
} */

//  WHILE
// ejemplo  6 CICLO INFINITO no hacer esto porque muere la maquina jajajaja
/* while (true){
    console.log("Este mensaje infinito")
} */

// ejemplo 7 
/* let valor = prompt("Ingrese un dato (ESC para salir)")

//while (valor != "ESC") solo con esta opcion solo mayusculas
//while (valor != "ESC") || (valor != "esc") operador logico OR
//while (valor.toUpperCase() != "ESC") para convertir todo a mayusculas
while(valor.toUpperCase() != "ESC"){
    alert("El usuario ingreso: "+ valor)
    valor = prompt ("Ingresa otro dato")
} */

// DO WHILE
// ejemplo 8
/* let nombre = ""

do {
    nombre = prompt ("Ingresar un nombre") // sino se pone nada se rompe el ciclo
    alert("El nombre ingresado es: "+ nombre)
} while(nombre != "") */


// ejemplo 9
/* let nombre = ""

do {
    nombre = prompt ("Ingresar un nombre")
    if(nombre != ""){
        alert("El nombre ingresado es: "+ nombre)
    }
} while(nombre != "") */



/* //  EJEPLO DE IF ELSE ANIDADO
let selecionUsuario = parseInt(prompt("Que desea comer: \n 1.Una Hamburguesa \n 2.Un Taco \n 3.Un Hot dog \n 4.Unos Nachos"))

if (selecionUsuario === 1) {
    alert("Usted a selecciono una Hamburguesa");
} else if (selecionUsuario === 2) {
    alert("Usted a selecciono un Taco");
} else if (selecionUsuario === 3) {
    alert("Usted a selecciono un Hot dog");
} else if (selecionUsuario === 4) {
    alert("Usted a selecciono unos Nachos");
} */



// SWITCH
// ejemplo 10
/* let selecionUsuario = parseInt(prompt("Que desea comer: \n 1.Una Hamburguesa \n 2.Un Taco \n 3.Un Hot dog \n 4.Unos Nachos"))

switch(selecionUsuario) {
    case 1:
        alert("Usted selecciono una Hamburguesa")
        break;
    case 2:
        alert("Usted selecciono un Taco")
        break;
    case 3:
        alert("Usted selecciono un Hot dog")
        break;
    case 4:
        alert("Usted selecciono unos Nachos")
        break;
    default:
        alert("Opcion invalida")
        break;
} */

// ejemplo 11  con opcion String
/* let selecionUsuario = prompt("Que desea comer: \n 1.Una Hamburguesa \n 2.Un Taco \n 3.Un Hot dog \n 4.Unos Nachos")

switch(selecionUsuario) {
    case "UNO":
        alert("Usted selecciono una Hamburguesa")
        break;
    case "DOS":
        alert("Usted selecciono un Taco")
        break;
    case "TRES":
        alert("Usted selecciono un Hot dog")
        break;
    case "CUATRO":
        alert("Usted selecciono unos Nachos")
        break;
    default:
        alert("Opcion invalida")
        break;
} */





