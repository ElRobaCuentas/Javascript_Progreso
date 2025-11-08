const characterName = ['Goku', 'Crilin', 'Gohan'];

const [p1, p2, p3] = characterName;

console.log({p1, p2, p3}) //'Goku', 'Crilin', 'Gohan'

//----------------------------------------------------------------------

/* PERO QUE PASARIA SI QUIERO SACAR A CRILIN SIN SACAR A GOKU NI GOHAN */

/*
    BASICAMENTE USAMOS LA DESESTRUCTURACION DE LOS ELEMEMENTOS QUE NOS INTERESAN
    LO DE LAS COMAS ES BUENO SABER. 
    1. Es una mala practica porque asignamos espacio en memoria que no usamos
        const [p1, p2, p3]
        console.log({p2})

    2. Válido y buena practica
        const [, p2] 
        const [, , p3]

*/

//----------------------------------------------------------

/* PODEMOS APLICAR TAMBIEN PARA VALORES DE FUNCIONES */

// const returnsArrayFn = () => {

//     return ['ABC', 123]; 
// }

// const [letters, numbers] = returnsArrayFn();
// console.log(letters + 100);
/*
Si pones el cursor encima la funcion, te dice que retorna un string o
un numero, (string | number), pero esa no es la idea, ya que no sabria 
con exactitud que retorna

    Si en el clg ponemos console.log(letters + 100); -> ERROR
        El operador + no puede aplicarse al tipo string | number, porque 
        no sabe si es o un string o un numero, tal vez en consola si lo
        pone como resultado "bien", pero la logica está mal. 
        
        
    Para esos errores, existe el as const
    Asumamos que en mi arreglo la primera posición siempre será un string
    y el de la segunda posicion será siempre un number, entonces...
*/

const returnsArrayFn = () => {

    return ['ABC', 123] as const
}

const [letters, numbers] = returnsArrayFn();
console.log(letters + 100); //YA SABE QUE TIENE QUE CONCATENAR
console.log(numbers + 100); //YA SABE QUE TIENE QUE SUMAR

//-------------------------------------------------------------

//TAREA

/*
Crea una función llamada useState. Debe cumplir con los siguientes 
requisitos:


La función debe llamarse useState.
Debe retornar un arreglo con dos elementos:
#1 - Un string (el valor inicial).
#2 - Una función anónima de flecha que:
Recibe un string.
Imprime ese string en consola.

EJEMPLO:
const [name, setName] = useState('Goku');
console.log(name);       // Goku
setName('Vegeta');       // Imprime "Vegeta"

*/

//--------------------------------------------------
// const useState = () => {
//     const setName = () => console.log('Jesus');
//     return ['Juan', setName] as const;
// }

// const [name, setName] = useState();
// console.log(name);
// setName();

//---------------------------------------------------
const useState = (value: string) => {
    return [value, (newValue: string) => {
        console.log(newValue)
    }] as const;
}

const [v1, setName] = useState('Juan')
console.log(v1);
setName('Jesus');






