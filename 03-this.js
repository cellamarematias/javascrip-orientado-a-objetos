/* 
THIS refiere al objeto en sí.
*/

const user = {
    name: "Ryan",
    lastName: "Ray",
    age: 30,
    showFullName() {
        return this.name + " " + this.lastName
    }
}

console.log(user.showFullName())


const account = {
    number: 12345,
    amount: 10000,
    deposit(quantity) {
        this.amount = this.amount + quantity
    },
    withdraw(quantity) {
        this.amount = this.amount - quantity
    }
}

account.deposit(250)
account.withdraw(50)

console.log(account)