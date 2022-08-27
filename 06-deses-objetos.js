// Desestructuración
// Asignación Desestructurante

const persona = {
  nombre: "Daniel",
  edad: 28,
  clave: 'holamundo123*',
};

// const { nombre, edad, estatura } = persona;

// console.log(nombre, edad, estatura);

// console.log(persona.nombre)
// console.log(persona.edad)
// console.log(persona.estatura)

const useContext = ({ clave, nombre, edad }) => {
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: -34.397,
      lng: -56.743,
    },
  };
};

const { nombreClave, anios, latlng:{lat, lng} } = useContext(persona);

console.log(nombreClave, anios, lat, lng);