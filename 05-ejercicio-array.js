// ➡️ Declara un array que vamos a llamar “posiciones” con los siguientes valores: Mateo, Marcos, Lucas, Juan, Pedro, Pablo (vamos a suponer que es el orden de clasificación de un concurso, en un momento dado)
let posicion = ["Mateo", "Marcos", "Lucas", "Juan", "Pedro", "Pablo"];

// ➡️ Imprime la clasificación actual en el HTML El concurso continua, y se van modifican esas posiciones anteriores. Debemos cambiar en el array:

document.write("Posición actual" + '<br>')
document.write("1. " + posicion[0] + '<br>')
document.write("2. " + posicion[1] + '<br>')
document.write("3. " + posicion[2] + '<br>')
document.write("4. " + posicion[3] + '<br>')
document.write("5. " + posicion[4] + '<br>')
document.write("6. " + posicion[5] + '<br>')

// Valores modificados

// ➡️ Juan adelanta a Lucas
posicion[2] = "Lucas"
posicion[3] = "Juan"

// ➡️ Pablo es descalificado y se elimina del concurso
posicion.pop()

// ➡️ Detrás de Mateo y antes de Marcos se clasifican dos nuevos concursantes:
// ➡️ Luisa y Carlos, en ese orden

posicion.splice(1, 0, 'Luisa', 'Carlos')

// ➡️ Hay una nueva participante que pasa a encabezar la clasificación: Daniel
posicion.unshift('Daniel')

// ➡️ Imprime la clasificación actualizada y comprueba que se ha hecho correctamente
document.write("<br>");
document.write("Posición Modificada" + '<br>')
document.write("1. " + posicion[0] + '<br>')
document.write("2. " + posicion[1] + '<br>')
document.write("3. " + posicion[2] + '<br>')
document.write("4. " + posicion[3] + '<br>')
document.write("5. " + posicion[4] + '<br>')
document.write("6. " + posicion[5] + '<br>')
document.write("6. " + posicion[6] + '<br>')
document.write("6. " + posicion[7] + '<br>')

