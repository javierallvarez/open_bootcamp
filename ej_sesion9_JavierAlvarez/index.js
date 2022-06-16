const logger = require('./logger')

const miFunc = val => {
    if (typeof val === "string"){
    return val.toUpperCase()
    }
    throw new Error('El valor debe ser de tipo string')
} 
// Por error, ponemos un número en vez de string:
try {
    const minus = miFunc(3)
    console.log(minus);
} catch(e) {
    console.error(`${e}`);
} finally {
    console.log('Texto transformado a mayúsculas (solo en caso de introducir un string)');
}

logger.error('Mensaje de error');