// ! Ejercicio 4: Carrito de Compras con Descuentos
// Manejo de estados en un objeto usando métodos y condicionales (if/else).

const prompt = require("prompt-sync")();

//  1. Crea un objeto Carrito usando una función constructora o clase que tenga:

function carrito(){
    this.productos = [];
    this.total = 0;

// 2.Implementa estos métodos:

    // •agregarProducto(nombre, precio): Añade el producto al array y suma el precio al total.
    this.agregarProducto = function () {

        while (true){
        
            let ingresar = prompt("¿Quiere ingresar nuevos producto a su carrito? Escriba si o no: ").toLocaleLowerCase();
            
            if (ingresar === "si"){
                let nombre = prompt("Ingrese un nuevo producto: ");
                this.productos.push(nombre);
                
                let precio = Number(prompt("Ingrese el precio: "));
                this.total = this.total + precio;
            
            } else if (ingresar === "no"){
                console.log("Finalizando ingreso de productos...");
                break;
            } else {
                console.log("Respuesta no válida. Escriba 'si' o 'no'.");
            }

        }
    
    }

    // Agregue esta función para poder ver que se compro 
    // •mostrar():
    this.mostrar = function(){
        console.log("Lista de Compras:");

        // 4.Muestra la lista completa en consola.
        for (let i = 0; i < this.productos.length; i++){
            console.log((i + 1) + ". " + this.productos[i]);
        } 

    }

    //  •calcularDescuento():
    this.calcularDescuento = function(){
        if (this.total > 100){
            this.total = this.total - (this.total * 0.1);
            console.log("El precio final es de: " + this.total);
        } else if (this.total > 50 && this.total <= 100) {
            this.total = this.total - (this.total * 0.05);
            console.log("El precio final es de: " + this.total);
        } else {
            console.log("El precio final es de: " + this.total);
        }
    }

}

let miCarrito = new carrito()

miCarrito.agregarProducto()
miCarrito.mostrar()
miCarrito.calcularDescuento()