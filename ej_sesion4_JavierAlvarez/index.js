const nombre = 'Javier'
const apellido = 'Álvarez'
const estudiante = nombre.concat(" ", apellido)
const estudianteMayus = estudiante.toUpperCase()
const estudianteMinus = estudiante.toLowerCase()
const estudianteLen = estudiante.length
const primeraNombre = nombre[0]
const primeraApellido = apellido[0]
const noEspacios = estudiante.replace(' ', '')
const incluyeNombre = estudiante.includes(nombre)

console.log(estudiante);
console.log(estudianteMayus);
console.log(estudianteMinus);
console.log(estudianteLen);
console.log(primeraNombre);
console.log(primeraApellido);
console.log(noEspacios);
console.log(incluyeNombre);