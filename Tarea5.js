// Un objeto es una colección de pares clave - valor (propiedades)

const libro = {
    // Propiedades (datos del libro)
    titulo: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    anio: 1943,
    disponible: true,

    // Propiedad tipo arreglo
    capitulos: ["Capítulo 1", "Capítulo 2", "Capítulo 3"],

    // Método que muestra la información básica
    mostrarInfo() {
        console.log(`Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}.`);
        console.log(`Estado: ${this.disponible ? "Disponible" : "Prestado"}`);
        // this apunta a ESTE objeto (libro)
    },

    // Método que lista los capítulos
    mostrarCapitulos() {
        this.capitulos.forEach((capitulo, i) => {
            console.log(`${i + 1} - ${capitulo}`);
        });
    },

    // Agregar un capítulo
    agregarCapitulo(nombre) {
        this.capitulos.push(nombre);
        console.log(`Capítulo agregado: ${nombre}`);
    },

    // Eliminar capítulo correctamente (NO usar pop con nombre)
    eliminarCapitulo(nombre) {
        this.capitulos = this.capitulos.filter(c => c !== nombre);
        console.log(`Capítulo eliminado: ${nombre}`);
    },

    // Cambiar estado del libro
    cambiarEstado() {
        this.disponible = !this.disponible;
        console.log(`Nuevo estado: ${this.disponible ? "Disponible" : "Prestado"}`);
    }
};

// Acceder a datos con notación de punto
console.log(libro.autor);
console.log(libro.capitulos);

// Acceder con notación de corchetes
console.log(libro["titulo"]);
console.log(libro["disponible"]);

// Llamar métodos
libro.mostrarInfo();
libro.mostrarCapitulos();

libro.agregarCapitulo("Capítulo 4");
libro.mostrarCapitulos();

libro.eliminarCapitulo("Capítulo 2");
libro.mostrarCapitulos();

libro.cambiarEstado();

// DESESTRUCTURACIÓN COMO EN CLASE

// Sacar el arreglo
const { capitulos } = libro;

// Sacar elementos del arreglo
const [primero, segundo, tercero] = capitulos;

console.log(primero);
console.log(segundo);
console.log(tercero);

console.log("----------------------------");

// Forma directa en una sola línea
const { capitulos: [cap1, cap2, cap3] } = libro;

console.log(cap1);
console.log(cap2);
console.log(cap3);

// Renombrar variables al desestructurar
const { titulo: nombreLibro, anio: lanzamiento } = libro;

console.log(nombreLibro);
console.log(lanzamiento);

// Desestructuración básica
const { titulo, autor } = libro;

console.log(titulo);
console.log(autor);