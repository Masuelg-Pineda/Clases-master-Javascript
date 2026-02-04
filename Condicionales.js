let edad = 20;
let tieneINE = true;

//Condicion
if (edad >= 18){
    console.log("Eres mayor de edad"); //se ejecuta si es true
}else {
    console.log("Eres menor de edad"); // se ejecuta si es false
}

let calif = 4;

if (calif >= 9){
    console.log("Eres increible"); 
}else if(calif >= 6) {
    console.log("Pansaste"); 
}else {
    console.log("Reprobado :( "); 
}

//AND (y) &&
//OR (o) ||
//NOT (negacion) !

if (edad >= 18 && tieneINE){
    console.log("Puedes votar")
}else{
    console.log("NO puedes votar")
}

let numero = prompt("Ingresa un numero");

numero = parseInt(numero);

//Si quieres preguntar si es divisible o no entre 2
if (numero % 2 === 0){
    console.log("es divisible entre 2")
} else{
    console.log("NO es divisible entre 2")
}

console.log()
5
let esPremium = true;
let totalCompra = 350;
let esFindeSemana = false;

if(esPremium || (totalCompra > 1000 && esFindeSemana)){
    console.log("Descuento aplicado")
} else {
    console.log("No aplica el descuento")
}