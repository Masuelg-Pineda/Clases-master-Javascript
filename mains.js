//Seleccionados nuestros elementos del DOM mediante ID

const titulo = document.getElementById("titulo");
console.log(titulo);

const texto = document.getElementById("texto");
console.log(texto);

const caja = document.getElementById("caja");
console.log(caja);

const bTnTexto = document.getElementById("bTnTexto");
const bTnColor = document.getElementById("bTnColor");
const bTnOcultar = document.getElementById("bTnOcultar");

//Cambiar texto

bTnTexto.addEventListener("click", () => {
    titulo.textContent = "Cambiaste el texto desde Javascript";
});

//Cambiar color
bTnColor.addEventListener("click", () => {
    titulo.style.color = "white";
    titulo.style.backgroundColor = "coral";
});
