//Repite mientras la condición es true

let i = 1;

while (i <= 5){
    console.log("while:", i);
    i++; // i = i + 1
} //ejercicios python tutor.com

let entrada = "";

while(entrada !== "Salir"){
    entrada = prompt("escribe algo");
}

console.log("Yeih saliste");

//Arrays o arreglos
let frutas = ["Manzana", "Pera", "Lulo", "Cereza", "Mango", "Papaya"];

console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[0]);

console.log(frutas.length);

for (let indice = 0; indice < frutas.length; i++){
    console.log("Frutas = ", frutas[indice]);
}

console.log("Metodos de los arreglos");
let alumnos = []; //declarando un arreglo vacio

alumnos.push("Ana");
alumnos.push("Bruno");
alumnos.push("Fer");
alumnos.push("Natalia");

console.log(alumnos);
//metodo pop quita el ultimo
alumnos.pop();
console.log(alumnos);

//metodo unship agrega al principio
alumnos.unshift("Nina");
alumnos.unshift("Misael");
alumnos.unshift("Beto");
console.log(alumnos);

//metodo shift quita al principio
alumnos.shift();
console.log(alumnos);

//arreglo de lista de super
//impriman su lista del super
/*1. manzana
2. papas
3. papel de baño
4. jabon

Extra 1 Total de productos = ____
Extra 2
Prompt ir metiendo (guardar la lista que te da el usuario, dentro de un arreglo)
*/