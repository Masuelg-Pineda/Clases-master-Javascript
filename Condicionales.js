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