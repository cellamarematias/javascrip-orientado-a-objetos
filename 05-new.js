/*
Si no uso el new, JS va a asignar el objeto a un objeto superior - Esto genera bugs
Para evitar esto, siempre hacemos uso de la palabra "new" para crear objetos
Caso contrario podemos poner dentro del objeto el "use strict" para que deje las props
como undefined
*/

function Person() {
    "use strict"
    this.name = '',
    this.lastName = ''
}

const person1 = new Person()

const person2 = Person()

/* 
Esto devuelve:
    this.name = '',
              ^

TypeError: Cannot set properties of undefined (setting 'name')
*/
