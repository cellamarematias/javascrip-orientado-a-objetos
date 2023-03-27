/*
Herencia: nos permite crear objetos más específicos a partir de otros objetos.
Lo hacemos a través de "extends" y super() para traer las props

*/

class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }
}

class Programmer extends Person{
    constructor(language, name, lastName) {
        super(name, lastName); // los paso en ORDEN
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