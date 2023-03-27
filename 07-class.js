/*
Class - Se introduce en ES06.

Es una forma de escribir "mejor" lo que usamos en los archivos anteriores.
Son un conjunto de métodos.
Dentro de la clase usamos "constructor(){}" para que retorne un objeto.
'Use Strict': no hace falta agregarlo, las clases tienen implícito el use strict.
Esto se lo conoce como SUGAR SINTAX - es lo mismo para el intérprete pero esctito de otra manera.

No son hoisted -> Hay que definirlas primero yluego instanciarlas
*/

class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }

    greet() {
        return `Hola ${this.name}`
    }
}

const user1 = new Person('Matías', 'Cellamare')
const user2 = new Person('Daniel', 'Cellamare')

console.log(user1)
console.log(user2.greet())
