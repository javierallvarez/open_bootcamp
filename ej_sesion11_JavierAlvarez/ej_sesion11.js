class Estudiante {
    nombre;
    asignaturas;
    constructor(nombre, asignaturas) {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }
    obtenDatos() {
        console.log(`Hola, mi nombre es ${this.nombre}, estoy formándome en ${this.asignaturas}.`);
    }
}

let nuevoEstudiante = new Estudiante("Peter",['Javascript', 'HTML', 'CSS']) 
console.log(nuevoEstudiante);

nuevoEstudiante.obtenDatos()