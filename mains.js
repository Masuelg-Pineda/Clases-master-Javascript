//Seleccionados nuestros elementos del DOM mediante ID

const titulo = document.getElementById("titulo");
console.log(titulo);

const texto = document.getElementById("texto");
console.log(texto);

const caja = document.getElementById("caja");
console.log(caja);

const bTn = document.getElementById("bTn");
const bTnTexto = document.getElementById("bTnTexto");
const bTnColor = document.getElementById("bTnColor");
const bTnOcultar = document.getElementById("bTnOcultar");

//Cambiar texto

bTnTexto.addEventListener("click", () => {
    titulo.textContent = "Cambiaste el texto desde Javascript de la clase de hoy";
});

//Cambiar colores
bTnColor.addEventListener("click", () => {
    titulo.style.color = "blue";
    caja.style.backgroundColor = "blue";
});

//Para ocultar mi caja
bTnOcultar.addEventListener("click", () => {
    if (caja.style.display === "none") {
        caja.style.display = "block";
    } else {
        caja.style.display = "none";
    }
});

//Cambiar de clase
bTn.addEventListener("click", () => {
    caja.classList.toggle("activa"); //Cambia el estado visual
});