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

console.log(Ana); //error de variable no definida

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