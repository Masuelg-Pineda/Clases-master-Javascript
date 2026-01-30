//Operadores basicos
var color = "azul";
var color = "verde";
var color = "morado";

console.log(color); //lEE DE ARRIBA HACIA ABAJO, OSEA IMPRIME LA ULTIMA

var color1 = "azul";
var color2 = "verde";
var color3 = "morado";

console.log(color1);
console.log(color2);
console.log(color3);

let mascota = "perro";
let mascota1 = "gato";

const numero = 23;

console.log("Operadores matematicos");
let num1 = 3;
let num2 = 5;
let suma = num1 + num2;
let resta = num2 - num1;
let modulo = num1 % num2;

console.log(suma);
console.log(15+15);
console.log(resta);
console.log(modulo);

console.log(num1*num2);
console.log(num2/num1);


console.log("Operadores logicos");
//comparacion simple
console.log(num1 == num2);
console.log(10 == 10);
console.log(12 == '12'); //dato numerico igual a dato string (el mismo)

//comparación estricta
console.log(23 === '23'); //comparación estricta

console.log("----------------------------");
let valor1 = 20;
let valor2 = 30;

//Mayor que
console.log(valor1 > valor2);
//Mayor o igual que
console.log(valor1 >= valor2);
//Menor que
console.log(valor1 < valor2);
//Menor o igual que
console.log(valor1 <= valor2);
//Distinto que
console.log(10 != 10);
//Distinto que estricto
console.log(10 !== 10);

console.log(valor1 + 2);
console.log(valor1); // imprime 20 ya que no se modifica lo almacenado

//Operadores combinados
valor1 = valor1 + 3;
valor1 += 4;
valor1 -= 2;

console.log(valor1);

//El modulo % devuelve el residuo de una division
//a%b

console.log(8 % 2);
