const listaCompra = ['leche', 'huevos', 'zumo', 'sal', 'queso'];

listaCompra.push("aceite de Girasol")
console.log(listaCompra);

listaCompra.pop()
console.log(listaCompra);

const pelis = [
    {titulo: 'Wall-E', director: 'Andrew Stanton', fecha: '2008'},
    {titulo: 'Bailando en la oscuridad', director: 'Lars Von Trier', fecha: '2000'},
    {titulo: 'Jojo Rabbit', director: 'Taika Waititi', fecha: '2019'},
]

const pelisRecientes = pelis.filter(obj => obj.fecha > 2010)
console.log(pelisRecientes);


const directores = pelis.map((valor) => `${valor.director}`)
console.log(directores);


const titulos = pelis.map((valor) => `${valor.titulo}`)
console.log(titulos);


const pelisInfo = titulos.concat(directores)
console.log(pelisInfo);


const masPelisInfo = [...titulos, ...directores]
console.log(masPelisInfo);