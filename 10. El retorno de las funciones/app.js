



function obtenerAleatorio(){

    
    return Math.random();

}


function obtenerNombre(){
    return "Juan";

}

function esMayor05(){
    if (obtenerAleatorio() > 0.5) {
        return true;
    }else{
        return false;
    }
    }

    if (esMayor05()) {
        console.log("Es mayor a 0.5");
    }else{
        console.log("Es menor a 0.5");
    }

    function crearPersona(nombre, apellido){
        
        return {
            nombre : nombre,
            apellido: apellido

        }
    }
    
    var persona = crearPersona("Maria","Paz");
    


    function creaFuncion(){

        return function(nombre){
            console.log("Me creo " + nombre);

            return function(){
                console.log("Segunda funcion");
            }
        }

       
    }



    var nuevaFuncion = creaFuncion();
    
    var segundaFuncion = nuevaFuncion(persona.nombre);
    segundaFuncion();