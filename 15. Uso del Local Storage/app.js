

//guardar_localstorage();
obtener_localstorage();

function obtener_localstorage(){

    if(localStorage.getItem("nombre")){

        // se que existe el nombre en el localstorage
        let nombre = localStorage.getItem("nombre");
        let persona = JSON.parse(localStorage.getItem("persona") );

         console.log(nombre);
        console.log(persona);
    }else{
        console.log("No hay entradas en el local storage");
    }

    
}

function guardar_localstorage(){

    let persona = {
        nombre: "Fernado",
        edad: 31,
        correo: "xyz@xyz.com",
        coords: {
            lat: 10,
            lng: -10
        }
    };

let nombre = "Pedro";

localStorage.setItem( "nombre", nombre);
localStorage.setItem( "persona", JSON.stringify(persona));

}
