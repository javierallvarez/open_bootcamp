sessionStorage.setItem("nombre", "Javi")
sessionStorage.setItem("apellido", "Allvarez")

sessionStorage.setItem("persona", JSON.stringify({ 
    nombre, 
    apellido 
}));

localStorage.setItem("nombre", "Javi")
localStorage.setItem("apellido", "Allvarez")

localStorage.setItem("persona", JSON.stringify({ 
    nombre:"Javi", 
    apellido: "Allvarez" 
}));


document.cookie = "Javi=Allvarez; max-age=120"
console.log(document.cookie);

