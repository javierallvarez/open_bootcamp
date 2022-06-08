const obj = {
    nombre: 'Javier', 
    apellido: 'Alvarez', 
    edad: 36, 
    altura: 181,
    eresDesarrollador: true
}

const miEdad = obj.edad
console.log(miEdad);

const amigos = [
    {nombre: obj.nombre, 
    apellido: obj.apellido, 
    edad: obj.edad, 
    altura: obj.altura,
    eresDesarrollador: obj.eresDesarrollador },

    {nombre: 'Felipe', 
    apellido: 'Lotas', 
    edad: 35, 
    altura: 175,
    eresDesarrollador: false },

    {nombre: 'Pepico', 
    apellido: 'Grillo', 
    edad: 30, 
    altura: 152,
    eresDesarrollador: false },
]

amigos.sort((a, b) => b.edad - a.edad)
console.log(amigos);