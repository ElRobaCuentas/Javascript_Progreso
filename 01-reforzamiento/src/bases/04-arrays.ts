const myArray = [1,2,3,4,5,6, 'hola', {}];

myArray.push(9)
console.log(myArray);

//Para buenas practicas siempre especifica el tipo de dato de tu arreglo
//Por recomendación, no hay que dejar que TypeScript infiera el tipo de dato de los arrglos que creamos


const myArray2:number[] = [1,2,3,4,5,6];
console.log(myArray2)