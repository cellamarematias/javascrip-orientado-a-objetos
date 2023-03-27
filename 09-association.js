/*

La asociación vincula dos objetos a través de una prop

*/


class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }
}


const matias = new Person('Matías', 'Cellamare')
const daniel = new Person('Daniel', 'Cellamare')

matias.parent = daniel

console.log(matias)

/* log:
Person {
  name: 'Matías',
  lastName: 'Cellamare',
  parent: Person { name: 'Daniel', lastName: 'Cellamare' }

*/