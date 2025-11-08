

const firstName = 'Juan';
// const lastName = 'O'neal'; El programa no va a saber que estoy haciendo acá
const lastName = "O'Neal";

const lastName1 = "O'Neal \"es el mas capo\""; //es posible hacer esto

// console.log(firstName, lastName);

//hay otras formas también, por ejemplo concatenar-
// console.log(firstName + '   ' + lastName);

/*
Puedo usar el backstick (mantener presionado AltGR + [{ arriba del enter)
    1. Interpolar variables: Puedes meter variables o codigo (expresión) de Javascript dentro del texto, a expresión de Javascript me refiero lo que está entre llaves
    2. Multiples lineas: Puedo escribir un string con varias linas sin la necesidad de usar saltos de lines(\n)
*/
const fullName = `

    El nombre completo es: ${firstName} ${lastName}

    ${1 + 1} a esto me refiero con expresion de javascript porque no va a 
    aparecer '1 + 1' como string, sino 2

`

console.log(fullName)