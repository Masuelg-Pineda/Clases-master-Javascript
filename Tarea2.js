/* El objetivo es agregar un archivo a tu repositorio 
y que contenga la solución al problema planteado a continuación.
Problema: Evaluador de Notas con Mensajes Personalizados
*/

let calif = Number(prompt("Hola Profesor(a) Ingrese calificacion del alumno? (Del 0 - 100)"));

if (calif >= 90 && calif <= 100){
    console.log("Excelente"); 
}else if(calif >= 75 && calif <= 89) {
    console.log("Bien");
}else if(calif >= 60 && calif <= 74) {
    console.log("Suficiente");
}else if (calif >= 0 && calif < 60) {
    console.log("No aprueba");
}else {
    console.log("Meter una calificación dentro del rango de 0 a 100");
}