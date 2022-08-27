// Funciones

function saludar(nombre){
    return `Hola, ${nombre}`
}

saludar = 10

console.log(saludar)

const saludar = function(nombre){
    return `Hola, ${nombre}`
}

saludar = 20

console.log(saludar)

// Funciones de flecha Arrow Function
const saludar = (nombre) => {
    return `Hola, ${nombre}`
}

console.log(saludar('Daniel'))

const saludar = (nombre) => `Hola, ${nombre}`

console.log(saludar('Daniel'))

const saludar = () => 'Hola Mundo!'

console.log(saludar())

// const obtenerUsuario = () => ({
//     'id': 123456,
//     'nombre': 'Daniel'
// })

console.log(obtenerUsuario())


const obtenerUsuario = () => ({
  id: 123456,
  nombre: "Daniel",
});

