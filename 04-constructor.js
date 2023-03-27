/*
Los constructores son funciones que nos permiten crear objetos y métodos.
- Empiezan con Mayúsculas
- Usamos la palabra "this"
*/

function Person() {
    this.name = ""
    this.lastName = ""
    this.age = 0
    this.showFullName = function () {
        return `${this.name} ${this.lastName}`
    }
}

const user = new Person()
const user2 = new Person()

user.age = 34
user.lastName = "Cellamare"
user.name = "Matías"

console.log(user.showFullName())

 
