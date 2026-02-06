let librosLeidos = [];

const agregarLibro = (libro) => {
    librosLeidos.push(libro);
};

const mostrarLibrosLeidos = () => {
    console.log("Libros leídos: ");
    for (let i = 0; i < librosLeidos.length; i++) {
    }
};

agregarLibro("El oso Juancho 1");
agregarLibro("El oso Juancho 2");
agregarLibro("El oso Juancho 3: el regreso del Oso Juancho");

mostrarLibrosLeidos(librosLeidos);
console.log(librosLeidos);