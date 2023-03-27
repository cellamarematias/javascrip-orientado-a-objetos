/*
La agregación es como una asociación pero uno de los objetos .
tiene un rol mayor (aggregate) que determina el "contenedor" de los demás.
Los objetos que están dentro de este se llaman "component".

Son independientes y pueden existir por separado.
*/

const company = {
    name: "California Tech",
    employees: []
}

class Person {
    constructor(name, lastName) {
        this.name = name
        this.lastName = lastName
    }
}

const matias = new Person('Matías', 'Cellamare')
const daniel = new Person('Daniel', 'Cellamare')

company.employees.push(matias)
company.employees.push(daniel)


console.log(company)

/*
{
  name: 'California Tech',
  employees: [
    Person { name: 'Matías', lastName: 'Cellamare' },
    Person { name: 'Daniel', lastName: 'Cellamare' }
  ]
}
*/