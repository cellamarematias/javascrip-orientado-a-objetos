/*
Encapsulación: concentra la datos y funciones ocultando detalles internos.
Solo usamos sus métodos. 
Se usa para simplificar su uso, no tenemos que entender cómo funciona internamente.


*/

function Company(name) {
    let employees = [] // esta variable no se va a ver si no la llamo con un método a diff de this.name
    this.name = name

    this.getEmployees = function() {
        return employees
    }
    
    this.addEmployees = function(employee) {
        employees.push(employee)
    }
}

const matiCompany = new Company('Mati Tech')

//console.log(matiCompany)

/*
Company {
  name: 'Mati Tech',
  getEmployees: [Function (anonymous)],
  addEmployees: [Function (anonymous)]
}
*/

matiCompany.addEmployees({name: 'Matías'})

console.log(matiCompany.getEmployees()) // sin este método no puedo acceder a employees