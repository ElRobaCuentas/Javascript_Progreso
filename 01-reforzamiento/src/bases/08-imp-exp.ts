
import { heroes, type Owner } from "../data/heroes.data"


// const getHeroById = (id:number): Hero | undefined => {

//     const findId = heroes.find( (hero) => {
//         return hero.id === id;
//     } )

//     return findId;
// }

// console.log(getHeroById(3));




//Practica


const getHeroByOwner = (owner: Owner) => {

    const filtOwner = heroes.filter( (prop) => {
        return prop.owner === owner;
    });

    return filtOwner;
}
console.log(getHeroByOwner('DC')); //type Owner, NO enum
                                   //Si es enum -> Owner.DC






