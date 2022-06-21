const btn = document.getElementById("boton")

btn.addEventListener("click", evento => {
    console.log(evento)
    alert("Click en el botón")
    evento.preventDefault;
})

$(btn).click((elem) => {
    console.log("Hola, estoy utilizando jQuery")
}) 