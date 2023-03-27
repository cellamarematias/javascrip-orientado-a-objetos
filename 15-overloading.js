/*
En JS no tenemos mayor complicación porque tiene tipado dinámico y no necesitamos especificarlo
en cada función según el valor enviado como parámetro.

*/


function countItems(x) {
    return x.toString().length
}

console.log(countItems('Hola'))
console.log(countItems(123123))


function sum (x, y, z) {
    return x + y + z
}

console.log(sum(10,20)) // devuelve NaN porque le falta el 3er parámetro. para evitarlo declaro en cero los params.


function sum2 (x = 0, y = 0, z = 0) {
    return x + y + z
}

console.log(sum2(10,20)) // devuelve 30