

// const arreglo = new Array(50);

// console.log(arreglo)


const arreglo = [1, 2, 3, 4]

let arreglo2 = [...arreglo, 5]

const arreglo3 = arreglo2.map((numero) => {
    return numero * 5
})

console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)
