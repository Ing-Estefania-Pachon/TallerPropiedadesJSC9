// ! Ejercicio 3: Reproductor de Música

// 1.Crea un objeto Reproductor usando una función constructora con:
// • Una propiedad estado con valor inicial "detenido" (otros valores 
//   posibles: "reproduciendo", "pausado").

function reproductor(estado){
    this.estado = "detenido"
    
//  2.Implementa estos métodos:
    // •play():
    this.play = function(){
        if (estado === "detenido" || this.estado === "pausado"){
            this.estado = "reproduciendo"
            console.log("Reproduciendo música ...");
            if (this.estado === "reproduciendo"){
                console.log("Ya se está reproduciendo música. ");
            }
        }
    }

    // •pausar():
    this.pausar = function(){
        if (estado === "reproduciendo"){
            this.estado = "pausado"
            console.log("Música pausada");
        }else{
            console.log("No hay música reproduciendo");  
        }
    }

    //  •detener(): 
    this.detener = function(){
        this.estado = "detenido"
        console.log("Música detenida");
        
    }

}

let miReproductor = new reproductor("reproduciendo");

miReproductor.play();
miReproductor.pausar();
miReproductor.detener();