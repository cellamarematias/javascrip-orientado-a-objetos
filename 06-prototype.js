/*
Prototypes 
Lo usamos para alterar el contructor original
Podemos añadir un método o propiedad al objeto

Por eso JS es orientada a objetos basada en prototipos

*/

function Person(name, lastName) {
    this.name = name,
    this.lastName = lastName,
    this.displayName = function() {
        return `${this.name} ${this.lastName}`
    }
}

const mati = new Person("Matías", "Cellamare")

console.log(mati.displayName())

Person.prototype.greet = function() {
    return `Hola ${this.name}`
}


