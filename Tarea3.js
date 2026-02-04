let frutas = ['Manzana', 'Pera', 'Manzana', 'Papaya', 'Tuna', 'Naranja', 'Pera', 'Manzana'];
let conteoFrutas = [];

//CON FOR

for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];
    // Si la fruta ya existe, suma 1; si no, inicializa en 1
    conteoFrutas[fruta] = (conteoFrutas[fruta] || 0) + 1;
}

console.log("Conteo con ciclo FOR:", conteoFrutas);

// CON While

let j = 0;
let conteoWhile = [];

while (j < frutas.length) {
    let fruta = frutas[j];
    conteoWhile[fruta] = (conteoWhile[fruta] || 0) + 1;
    j++; // ¡No olvides incrementar el contador!
}

console.log("Conteo con ciclo WHILE:", conteoWhile);