let nombre = "Ianira"  //String
let edad = 42
const PI = 3.1416

let calificacionUno = 10
let calificacionDos = 5
let calificacionTres = 8


const SUMA = calificacionUno + calificacionDos + calificacionTres
console.log(SUMA)

const RESTA = calificacionUno - calificacionDos - calificacionTres
console.log(RESTA)

const MULTIPLICACION = calificacionUno * calificacionDos * calificacionTres
console.log(MULTIPLICACION)

const DIVISION = SUMA / 3
console.log(DIVISION)


//CONCATENAR STRINGS

//let palabraUno
//let palabraDos
//let palabraTres

//palabraUno = "Bienvenidos"
//palabraDos = "al"
//palabraTres = "curso"

//const FRASE = palabraUno+palabraDos+palabraTres  //Bienvenidosalcurso
//const FRASE = palabraUno+" "+palabraDos+" "+palabraTres   //Bienvenido al curso
//const FRASE = palabraUno+"\n"+palabraDos+"\n"+palabraTres //Bievenido SALTO DE LINEA al SALTO DE LINEA curso
//console.log(FRASE)


const ANIOACTUAL = 2022
const SEPARADOR = " " 

const NOMBRE = prompt("Ingresa tu nombre")
const ANIO = prompt("Ingresa tu año de nacimiento")

const EDAD = ANIOACTUAL - ANIO

const FRASE = "Hola" + SEPARADOR + " en este año tendras " + EDAD + " años"

alert(FRASE)
console.log(FRASE)



