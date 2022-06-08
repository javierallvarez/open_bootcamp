const persona = {
    nombre: 'Javier',
    edad: 36,
    isDeveloper: true,
    nacimiento: new Date(1985, 05, 10),
    favBook: {
        titulo: 'I, Robot', 
        autor: 'Isaac Asimov',
        fecha: new Date(1950, 11, 02),
        url: "https://books.google.es/books/about/Yo_Robot.html?id=EKS1DwAAQBAJ&printsec=frontcover&source=kp_read_button&hl=es&redir_esc=y#v=onepage&q&f=false"
    }
}

console.log(persona);
console.log(persona.favBook);