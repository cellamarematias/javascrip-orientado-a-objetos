/*
Polimorfismo paramétrico: puede funcionar con cualquier parámetro y de cualquier tipo.
Al no tener restricción de tipos, le puedo pasar cualquier dato y funciona igual.
*/

function Stack() {
    this.items = []

    this.push = function(item) {
        this.items.push(item)
    }
}

const stack = new Stack()
stack.push('Python')

const stack2 = new Stack()
stack2.push(true)


console.log(stack) // Stack { items: [ 'Python' ], push: [Function (anonymous)] }

console.log(stack2) // Stack { items: [ true ], push: [Function (anonymous)] }