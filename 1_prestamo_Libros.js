
// ! Ejercicio 1:  Libro (Objeto básico + if)
//  Crear un sistema de préstamo de libros.

const prompt = require("prompt-sync")();

// 1.Usa el constructor Libro para crear un objeto con título y autor.

function libro(titulo, autor){
    this.titulo = titulo;
    this.autor = autor;
    
    // 2.Agrega una propiedad prestado = false.
    this.prestado = false;

    //  3.Implementa el método prestar() 
    this.prestar = function(){
        
        let accion = prompt ("Para el prestamo de los libros debes escribir SI: ").toLowerCase();

        if (accion === "si" && this.prestado === false){
            this.prestado = true;
            console.log("Esta disponible el libro");
        }else if (this.prestado === true){
            console.log("Error: El libro ya está prestado.");
        }else{
            console.log("No se realizó el préstamo.");
        } 
    } 
}
// 4. Probar el préstamo dos veces:
let miLibro = new libro("La sed", "Enrique Patiño");

miLibro.prestar(); 
miLibro.prestar();
