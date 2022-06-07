const alturaCm = 181;
const altMetros = 1.81;
const peso = 74.35;

const alturaRound = altMetros.toPrecision(1);
const pesoRound = peso.toPrecision(2);

console.log(alturaCm + 'cm');
console.log(altMetros  + 'm');
console.log(peso +'kg');

console.log(alturaRound +'m');
console.log(pesoRound +'kg');

// El resultado siempre es un string:
console.log(typeof pesoRound);


// - Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript
const maxValueJS = Number.MAX_VALUE + 1 === Number.MAX_VALUE;
console.log(maxValueJS);