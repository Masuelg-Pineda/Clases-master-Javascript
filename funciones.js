/* function nombreDescriptivo(parametros){
    //Lo que va a hacer mi funcion
    return "Hola" + parametros
}
*/
function saludar(nombre){
    //Lo que va a hacer mi funcion
    return "Hola " + nombre;
}

saludar("Ana"); //Llamando a mi funcion saludar

let saludo = saludar ("Fatima");

console.log(saludar("Felipe"));
console.log(saludo);

function sumar(a,b){
    console.log (a + b); //Resultado en consola
}

sumar(2,3);

//return entrega un valor para usarlo despues
function restar(num1, num2){
    let resultado = num1 - num2;
    return resultado; //Esta variable es local
}

console.log(restar(10,7));

let resultado; // esta es variable global

function sinreturn (){
    let x = 5;
}
//logra ejecutar la funcion, pero no regresa nada
console.log(sinreturn()); //undefined


function multiplicar(dato1, dato2){
    return dato1 * dato2;
}

console.log(multiplicar(4)); //Not a Number NaN, hace falta pasarle un argumento

//console.log(Ana); //error de variable no definida

//arrow function o funcion de flecha

const dividir = (a,b) => a/b; //return automatico
console.log(dividir(15,2));

const suma = (a,b) => { //una funcion mas larga {} no tiene return automatico
    return a + b;
}

console.log(suma(3,4));

const multi = (a,b) => {return a * b}
console.log(multi(10, 5));

//funciones anonimas para callbacks, eventos frontend

//funcion anonima (no necesita darle nombre, ejecuta algo puntual)
//Callbacks
setTimeout(function(){
    console.log("Esto se ejecuta despues...")
}, 5000);

//Cuando no ocupar funciones anónimas
/*Se tiene que reutilizar muchas veces
tiene logica grande o compleja
necesita ser testeada
Se necesita claridad */

function mascotas (a, b, c){
    console.log("nombre de mascotas: ", a + b + c)
}

mascotas("Cata", "Bombon", "Bunny");

/* 3 funciones
funcion calculo area de triangulo
funcion verificar si numero es primo
funcion para generar numero fibonacci
*/

//1er ejercicio
const ArTrian = (b,h) => (b*h)/2
console.log(ArTrian(12,4));

//2do ejercicio
const nPrimo = (n) => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n);i++){
        if (n % i === 0) return false;
    }
    return true;
};
console.log(nPrimo(8));
console.log(nPrimo(27));
console.log(nPrimo(29));

//3er ejercicio
const crearFibonacci = (cantidad) => {
    let lista = [];

    if (cantidad >= 1) lista.push(0);
    if (cantidad >= 2) lista.push(1);

    for (let i = 2; i < cantidad; i++) {
        lista.push(lista[i - 1] + lista[i - 2]); // suma los dos números anteriores y agrega el resultado al arreglo
    }

    return lista; // Devuelve la serie
};
console.log(crearFibonacci(6)); // [0, 1, 1, 2, 3, 5]
console.log(crearFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]