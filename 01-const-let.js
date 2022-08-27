//var Esto ya no se usa

// let Esta variable puede cambiar

// const Esta variable no cambia

// Scope Global
let numero = 8;

if (true) {
  // Scope Local
  let nombre = "Pedro"
  console.log(nombre);
}

// let nombre = "Juan"
console.log(nombre);

var miNombre = "Daniel"

const miNombre = "Pedro"

// Literal String
const ladoCuadrado = 8

const nombre = `Hola soy Daniel ${ ladoCuadrado }`

console.log("Hola soy Daniel" + " " + ladoCuadrado)

console.log(nombre)
