// La fecha de hoy
const fecha = new Date();
console.log(fecha.toLocaleDateString("en-GB"));

// La fecha de tu nacimiento
const fechaNacim = new Date('June, 10, 85');
console.log(fechaNacim);

// Una variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
console.log(fecha.getTime() > fechaNacim.getTime());

// Una variable que contenga el día de tu nacimiento
console.log(fechaNacim.getDate());

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
console.log(fechaNacim.getMonth() + 1);

// Una variable que contenga el año de tu nacimiento (con 4 dígitos) 
console.log(fechaNacim.getFullYear());