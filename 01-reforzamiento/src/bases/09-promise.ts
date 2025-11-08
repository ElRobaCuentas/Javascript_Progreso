
const miPromise = new Promise( (resolve, reject) => {
	//Aquí va el proceso asíncrono
	setTimeout ( () => { 
        resolve(100);
        // reject(100);
    }, 2000);
})

miPromise.then( (yMoney) => {
    console.log(`Tengo mi dinero: ${yMoney}`);
}).catch( (nMoney) => {
    console.warn(`No tengo mi dinero ${nMoney}`);
}).finally( () => {
    console.log("PUES A SEGUIR CON LA VIDA")
})
