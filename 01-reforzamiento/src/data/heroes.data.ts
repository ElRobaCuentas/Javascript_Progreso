//Interface y type no afectan nada cuando haces el proceso de TS -> JS


export type Owner = 'DC' | 'Marvel';
//Para definir una serie de posibles valores.
//Solo para cuando tengo valores específicos
//Esto es solo una regla que me pongo para que cuando me pongo los valores
//esos tienen que estar dentro de ese tipo ('DC' | 'Marvel')  
// o de los tipos permitidos


export interface Hero {
    id: number,
    name: string,
    owner: Owner
}

// enum Owner {
//     DC = 0,
//     Marvel = 1
// }
//Esto crea un objeto y una estructura de datos

// enum Owner {
//     DC = 'DC', //Ya no imprime 0, sino 'DC'
//     Marvel = 'Marvel',
// }


export const heroes:Hero[] = [
{
    id: 1,
    name: 'Batman',
    owner: 'DC' 
},
{
    id: 2,
    name: 'Spiderman',
    owner: 'Marvel' 
},
{
    id: 3,
    name: 'Superman',
    owner: 'DC'
},
{
    id: 4,
    name: 'Flash',
    owner: 'DC'
},
{
    id: 5,
    name: 'Wolverine',
    owner: 'DC',
},
];

console.log(heroes)