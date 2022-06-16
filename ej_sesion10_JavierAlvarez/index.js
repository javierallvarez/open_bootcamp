import chalk from 'chalk';
import { suma, multip } from './modulos/controller.js'

const mult = multip(1, 2)
console.log(mult);

const sum = suma(4, 5)
console.log(sum);


const verde = chalk.hex('#41e285');
console.log(verde('¡Soy verde!'));