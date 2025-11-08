

const usuario = {
    name: 'Ana',
    age: 28,
    country: 'México',
    rank: '01'
};

// const {name, age, country, rank} = usuario;
// console.log({name, age, country, rank});


//----------------------------------------------------

//Otras formas de usar la desestructuracion de objetos. 

interface Hero { 
    name: string,
    age: number,
    country: string,
    rank: string
}

const useContext = ({name, age, country, rank}:Hero) => {
//Solo lo estoy almacenando a una variable que tiene el mismo nombre
    return {
        country: country,
        user: { 
            name: name,
            age: age
        },
        rank: rank
    }
}


//dentro del useContext me dice que mande un objeto de tipo Hero con las
// properties que tiene, pero casualmente el interface Hero es igual al 
// objeto usuario(linea 3). 
const context = useContext(usuario);
console.log(context);