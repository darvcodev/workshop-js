
const heroes = ['Flash', 'IronMan', 'Superman', 'Batman', 'Spiderman'];

const [, , p3] = heroes;


const retornarArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornarArreglo();

// console.log(letras, numeros);

// Tarea
// 1. El primer valor del arreglo llamar heroe
// 2. El segundo valor se debe llamr setHeroe

const useState = ( valor ) => {
    return [ valor, () => {console.log('Hola Mundo')} ];
}

const [heroe, setHeroe] = useState('Flash');

console.log(heroe);
console.log(setHeroe);

const data = {
    key: 2,
    age: 23,
}

JSON.stringify(data);

const { key, age } = data;

console.log(key, age);
