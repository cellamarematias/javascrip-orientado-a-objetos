/*
Subtipo de polimorfismo: permite a los objetos con distintos datos y con una misma herencia ser procesados igual.

*/

class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }
}

class Programmer extends Person {
    constructor(language, name, lastName){
        super(name, lastName)
        this.language = language
    }
}

const matiDev = new Programmer('JavaScript', 'Matías', 'Cellamare')
console.log(matiDev)
/*
Programmer {
  name: 'Matías',
  lastName: 'Cellamare',
  language: 'JavaScript'
}
*/

function writeFullName(p) {
    console.log(p.name + " " + p.lastName)
}

writeFullName(matiDev) // Matías Cellamare