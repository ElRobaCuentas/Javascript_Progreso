
//Funciones tradicionales

function greet(name: string):string {
    
    return `Hola ${name}`
}

const message = greet('Juan');
console.log(message);

//----------------------------------------

//Funciones de flecha

// const greet2 = (name: string):string => {

//     return `Hola ${name}`
// }

// const message2 = greet2('Jorge');
// console.log(message2);


//Observación
/*
    Como greet2 es una constante, no puedo cambiar el valor de
    greet2 a otra cosa

    No: YA QUE ES UNA CONSTANTE
        greet2 = (...) => {
            ...
        }
*/

//------------------------------------------------------------

/*este ejemplo es para que te des cuenta que puedes retornar
tambien un objeto... */


function getUser() {
    return {
        uid: 'elrobacuentas',
        username: 'Juan Matias',
    }
}

const user1 = getUser();
console.log(user1);


// const getUser1 = () => {
//     return {
//         uid: 'elrobacuentas1',
//         username: 'Juan Jesus',
//     }
// }

// const user2 = getUser1();
// console.log(user2);

//-------------------------------------------------------------


/*PODEMOS SIMPLIFICAR AUN MAS LA FUNCIÓN*/

//1. Para las funciones flecha


const greet2 = (name: string):string => `Hola ${name}`

const message2 = greet2('Jorge');
console.log(message2);



const getUser1 = () => ({
    
    uid: 'elrobacuentas1',
    username: 'Juan Jesus',
});

const user2 = getUser1();
console.log(user2);
