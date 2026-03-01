// Objeto que maneja los comentarios
const cajaComentarios = {

    comentarios: [],

    agregarComentario(texto) {

        const fecha = new Date().toLocaleString();

        const nuevoComentario = {
            texto: texto,
            fecha: fecha
        };

        this.comentarios.push(nuevoComentario);

        this.mostrarComentarios();
    },

    eliminarComentario(index) {
        this.comentarios.splice(index, 1);
        this.mostrarComentarios();
    },

    mostrarComentarios() {

        const contenedor = document.getElementById("listaComentarios");
        contenedor.innerHTML = "";

        this.comentarios.forEach((comentario, index) => {

            const div = document.createElement("div");

            div.innerHTML = `
                <p><strong>${comentario.fecha}</strong></p>
                <p>${comentario.texto}</p>
                <button onclick="cajaComentarios.eliminarComentario(${index})">
                    Eliminar
                </button>
                <hr>
            `;

            contenedor.appendChild(div);
        });
    }
};

document.getElementById("formComentario").addEventListener("submit", function(e) {

    e.preventDefault(); // Evita que la página se recargue (buscado en internet para evitar lo que comentó la sensei)

    const input = document.getElementById("comentarioInput");
    const texto = input.value.trim();

    if (texto !== "") {
        cajaComentarios.agregarComentario(texto);
        input.value = "";
    }
});