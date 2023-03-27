/*
Paradigma de programación que se enfoca en objetos y no en funciones

OBJETOS - 
Propiedades: lo describe 
Métodos: qué hace - acciones.

*/


function showFullName() {
    return "Ryan Ray"
}

const user = {
    name: "Ryan",
    lastName: "Ray",
    age: 30,
    showFullName: showFullName //es una propiedad pero como es una FUNCIÓN es un MÉTODO
}

console.log(user.showFullName())

