// const ironman = {

//     firstName: 'Juan', //propertie
//     lastName: 'Jesus', //propertie
//     edad: 45,          //propertie

// }

//     Si puedo hacer -> cambiar las properties
//     ironman.firstName = 'Peter';
//     ironman.lastName = 'Parker';

//     console.log(ironman) 
//     Puedo hacer eso a pesar de que ironman es una constante, porque 
//     estoy cambiando las properties, pero no cambio a lo que apunto en 
//     memoria ese objeto literal, osea..
            

    //osea...
            // ironman = {
                
            //     firstName: 'Juan', //propertie
            //     lastName: 'Jesus', //propertie
            //     edad: 19,

            // }

    // console.log(ironman) 
    /*No puedo hacer esa reasignacion porque lo defini como una constante
    cosa diferente hubiera sido si lo hubiera creado con un let

        cambia const ironman.. (en las primeras lineas) por let y verás 
        que si cambia
    */

    /*
    Que se puede hacer y que no:
        Sí se puede hacer:
            Cuando creamos un objeto literal como una constante, podemos 
            cambiar a lo que apuntan son properties, sin cambiar a lo que 
            apunta en memoria la persona (que es el objeto) NO LO PUEDO 
            REASIGNAR
    */


//-------------------------------------------------------------------------------


// const ironman = {

//     firstName: 'Juan', //propertie
//     lastName: 'Jesus', //propertie
//     age: 45,          //propertie

// }

//     -No quiero que ironman tenga nombre de Peter Parker
//     const spiderman = ironman;

//     spiderman.firstName = 'Peter';
//     spiderman.lastName = 'Parker';
//     spiderman.age = 22;
    
//     console.log(ironman, spiderman) 

    /*
    Hasta aca tenemos que ambos objetos tienen los mismos datos y eso viene
    de const spiderman = ironman; (linea 58) no es un clon, es simplemente
    decir que la variable de spiderman apunte a la misma direccion de memoria
    Eso esta mal
    */


// const ironman = {

//     firstName: 'Juan', //propertie
//     lastName: 'Jesus', //propertie
//     age: 19,          //propertie

// }

//     Operador spread
//        /   
//         Basicamente le digo que tome todas las properties de ironman y las esparza 
//         dentro de spiderman.
//         Esto rompe la referencia al "primer nivel" y cae dentro de spiderman
//         Ya tenemos variables separadas
//        /
//     const spiderman = {..ironman};

//     spiderman.firstName = 'Peter';
//     spiderman.lastName = 'Parker';
//     spiderman.age = 22;
    
//     console.log(ironman, spiderman)

    /*
        El inconveniente de eso es cuando yo agrego otro objeto, sí, un 
        objeto dentro de otro objeto
    */

// const ironman = {

//     firstName: 'Tony', //propertie
//     lastName: 'Stark', //propertie
//     age: 45,          //propertie

//     address: {
//         postalCode: 'ABC123', 
//         city: 'New York',
//     },

// };

//     
//         Entonces aca tenemos que el address de ambos es el tiempo, porque 
//         en toría yo lo esparcí, por ejemplo a peter parker le pongo address
//         vemos que tanto ironman como spiderman tienen la cuidad San Francisco

//         Entonces, ahi vemos que el operador spread solo lo hace para las 
//         properties:
//         firstName, lastNam y age. Las demas, bueno pasa el objeto, pero
//         tal cual(igual), y recuerda que los objetos pasan por referencia

//         Esa es la desventaja del operador spread
//     

//     const spiderman = {...ironman};

//     spiderman.firstName = 'Peter';
//     spiderman.lastName = 'Parker';
//     spiderman.age = 22;
//     spiderman.address.city = 'San Francisco'
    
//     console.log(ironman, spiderman)


//-----------------------------------------------------------------------------

    /*
        Si quiero literalmente pasar un clon, usaremos entonces una funcion propia
        de Javascript llamada structuredClone(), esto nos permite poder clonar a 
        profundidad
    */


// const ironman = {

//     firstName: 'Tony', //propertie
//     lastName: 'Stark', //propertie
//     age: 45,          //propertie

//     address: {
//         postalCode: 'ABC123', 
//         city: 'New York',
//     },

// };

    // const spiderman = structuredClone(ironman);

    // spiderman.firstName = 'Peter';
    // spiderman.lastName = 'Parker';
    // spiderman.age = 22;
    // spiderman.address.city = 'San Francisco'
    // spiderman.address.postalCode = 'ABD456'
    
    // console.log(ironman, spiderman)


//--------------------------------------------------------------------------------------------------------

/*Para esta parte haremos INTERFACES*/

interface Person { //Esa interfaz es la creacion de un tipo especifico que se llama Person. 

    firstName: string;
    lastName: string;
    age: number;
    address: Address; //ese address es de tipo Address
}

interface Address { //Esa interfaz es la creacion de un tipo especifico que se llama Address

    postalCode: string;
    city: string;
}


const ironman:Person = { 
    /*
        Compuesta por Person (persona) y address (direccion)
        ironman es de tipo Person
    */

    firstName: 'Tony',
    lastName: 'Stark', 
    age: 45,   
    address: {
        postalCode: 'ABC123',
        city: 'New York'
    }       
    
};

console.log(ironman);