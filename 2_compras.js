
// ! Ejercicio 2: Lista de Compras (Array + for)
//  Gestionar una lista dinámica de productos.

const prompt = require("prompt-sync")();

// 1.Usa el constructor ListaCompras para crear una lista vacía (this.productos = []).
function listaCompras(prouctos){
    this.productos = [];
    
    // 2.Añade 3 productos con el método agregar().
    this.agregar = function(){
        
        while (true){
        
            let ingresar = prompt("¿Quiere ingresar nuevos producto a su carrito? Escriba si o no").toLocaleLowerCase();
            
        
            if (ingresar === "si"){
                let nuevoProducto = prompt("Ingrese un nuevo producto: ");
                this.productos.push(nuevoProducto);
            } else if (ingresar === "no"){
                console.log("Finalizando ingreso de productos...");
                break;
            } else {
                console.log("Respuesta no válida. Escriba 'si' o 'no'.");
            }

        }
    
    }

    // 3.Implementa el método mostrar() que use un for para listar los productos numerados (ej: "1. Manzanas").
    this.mostrar = function(){
        console.log("Lista de Compras:");

        // 4.Muestra la lista completa en consola.
        for (let i = 0; i < this.productos.length; i++){
            console.log((i + 1) + ". " + this.productos[i]);
        } 

    }

}

let miLista = new listaCompras();

miLista.agregar();   // Aquí se ingresan los 3 productos
miLista.mostrar();   // Aquí se muestran con numeración