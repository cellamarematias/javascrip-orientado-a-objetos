/* 
Un componente no tiene vida independiente porque pertenece a otro.
Por ej: address está fuertemente relacionado con person
*/

const person = {
    name: 'Matías',
    lastName: 'Cellamare',
    address: {
        street: 'Roca',
        city: 'Rosario',
        country: 'Argentina'
    }
}