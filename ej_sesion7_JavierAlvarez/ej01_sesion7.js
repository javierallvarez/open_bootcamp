const array = ['Piña', 'Coco', 'Totoro', 'Felpuíco', 'Rasputio', 'Javi']
const mySet = new Set(array)
console.log(mySet);

// Incluye un nuevo valor:
mySet.add('Javi')
console.log(mySet);

// No incluye un valor repetido:
mySet.add('Javascript')
console.log(mySet);