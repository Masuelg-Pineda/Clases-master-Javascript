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
    }
    //Metodo que liste las canciones
    mostrarCanciones(){
        this.canciones.forEach((cancion, i)) => {
            console.log(`${i + 1 } ${cancion}`);
        }
    }
}

//Acceder a los datos con notacion de punto
console.log(disco.artista);
console.log(disco.canciones);

//Acceder a los datos con notacion de corchetes
console.log(disco["titulo"]);
console.log(disco["dispobible"]);

//llamar a nuestro método
disco.mostrarInfo();
disco.mostrarCanciones();