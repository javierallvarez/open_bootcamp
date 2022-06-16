// Una función sin parámetros que devuelva siempre "true"
function mayorQue() {
    return true
}
console.log(mayorQue()) 


// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
const myPromise = new Promise(() => {
    setTimeout(() => {    
        console.log("Hola, soy una promesa");  
    }, 5000);
});


// Una función generadora de índices pares automáticos
function* generaId() {
    let i = 0;
    while(true) {
        i+=2
        if (i === 10){
            return i
        }
        yield i
    }
}

const gen = generaId();
console.log(gen.next().value); // 2
console.log(gen.next().value); // 4
console.log(gen.next().value); // 6
console.log(gen.next().value); // 8
console.log(gen.next().value); // 10