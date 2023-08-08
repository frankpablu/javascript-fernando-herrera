


/* var carlos = new Persona(); */


function Persona(nombre,apellido){

    this.nombre = "Juan";
    this.apellido = "Mendoza";
    this.edad = 30;

    this.imprimirPersona = function(){
        return this.nombre + " " + this.apellido + "("+ this.edad +")";
    }

}
var juan = new Persona("Juan", "Mendoza");

console.log(juan.imprimirPersona() );
