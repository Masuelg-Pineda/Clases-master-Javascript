//Un objeto es una colección de pares clave - valor (propiedades)

const disco = {
    //Propiedades (datos del disco) atributos del objeto
    titulo: "Debi tirar mas fotos",
    artista: "Bad Bunny",
    anio: "2025",
    dispobible: true,

    //Propiedad del tipo arreglo
    canciones: ["NuevaYol", "Mojaita", "Un x100to", "Tití me preguntó", "La Mudanza"],

    //Podemos guardar ACCIONES relacionadas con los datos
    //Metodo que muestra la informacion
    mostrarInfo() {
        console.log(`${this.titulo} de ${this.artista}, lanzado en ${this.anio}`);
        //this apunta a ESTE objeto (disco)
    },
    //Metodo que liste las canciones
    mostrarCanciones() {
        this.canciones.forEach((cancion, i) => {
            console.log(`${i + 1 }-${cancion}`);
        }
    )},
    //Agregar una cancion
    agregarCancion(nombre){
         this.canciones.push(nombre);
            console.log(`Cancion agregada: ${nombre}`)
    },

//Ejercicio
//Eliminar Cancion
    eliminarCancion(nombre){
        this.canciones.pop(nombre);
        console.log(`Cancion eliminada: ${nombre}`)
    },
}
//Cambiar estado de disco a no disponible

//Acceder a los datos con notacion de punto
console.log(disco.artista);
console.log(disco.canciones);

//Acceder a los datos con notacion de corchetes
console.log(disco["titulo"]);
console.log(disco["dispobible"]);

//llamar a nuestro método
disco.mostrarInfo();
disco.mostrarCanciones();
disco.agregarCancion("Close Friends");
disco. mostrarCanciones();
disco.eliminarCancion("Close Friends");
disco.mostrarCanciones();

//Destructurar es SACAR cosas de un objeto SIN necesidad de escribir objeto.propiedad

const { canciones } = disco;
const [primera, segunda, tercera] = canciones;
//Saca el arreglo y luego saca los elementos del arreglo

console.log(primera);
console.log(segunda);
console.log(tercera);
console.log("----------------------------");

const { canciones: [pista1, pista2, pista3]} = disco; //Una sola linea (forma directa)
console.log(pista1);
console.log(pista2);
console.log(pista3);

//Error comun: desestructurar NO crea datos, solo los extrae

const { titulo: nombreDisco, anio: lanzamiento} = disco;
//Se asigna el valor de la propiedad a una variable con otro nombre
console.log(nombreDisco);
console.log(lanzamiento);

//Desestructuracion basica
const {titulo, artista} = disco;

console.log(titulo);
console.log(artista);