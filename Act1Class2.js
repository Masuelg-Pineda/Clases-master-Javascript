//Actividad preguntar total de perros y gatos y sumarlos

//mi respuesta
/**
let perros = prompt("¿Cuantos perros tienes?");
document.write(perros);
perros = typeof numero;

let gatos = prompt("¿Cuantos gatos tienes?");
document.write(gatos);
gatos = typeof numero;

let mascotas = perros + gatos;
console.log("Tu total de mascotas es");
document.write(mascotas);
**/

//solucion
let perros = prompt("¿Cuantos perros tienes?");
let gatos = prompt("¿Cuantos gatos tienes?");

//Funcion que convierte a numero
perros = parseInt(perros); //parseInt - mas tolerante, util cuando el usuario escribe texto
gatos = parseInt(gatos);

let mascotas = perros + gatos;

console.log("En total tienes " + mascotas + " Mascotas");

//Ejemplo estricto
let hermanos = Number(prompt("¿Cuantos hermanos tienes?")); //Number es mas estricto si hay texto mezclado
let hermanas = Number(prompt("¿Cuantos hermanas tienes?"));

let totalH = hermanas + hermanos;

console.log("En total tienes " + totalH + " hermanos");
