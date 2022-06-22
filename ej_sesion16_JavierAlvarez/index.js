const parrafos = document.querySelectorAll(".parrafo")
const secciones = document.querySelectorAll(".seccion")
const papelera = document.querySelector(".papelera")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        // Muestra mensaje al arrastrar:
        console.log("Estoy arrastrando el párrafo: " + parrafo.innerText);
        // Clase con opacidad mientras se arrastra:
        parrafo.classList.add("dragging")
        // Clave: Valor. El id será igual al id del párrafo
        event.dataTransfer.setData("id", parrafo.id);
        const elemFantasma = document.querySelector(".imagen-fantasma");
        // (elemento, offsetX, offsetY)
        event.dataTransfer.setDragImage(elemFantasma, 0, 0)
    })

    parrafo.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar");
        parrafo.classList.remove("dragging")
    })
});

// DragOver, mientras se arrastra sobre algo, necesita prevenir el comportamiento por defecto de HTML, el cual no permite realizarlo por defecto:
secciones.forEach(seccion => {
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        // Cambiar el tipo de cursor:
        event.dataTransfer.dropEffect = "link"
        //console.log('Moviendo el párrafo con Drag Over');
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id")
        //console.log("Párrafo id: ", id_parrafo);
        // Coge el párrafo y añádelo como hijo:
        const parrafo = document.getElementById(id_parrafo)
        seccion.appendChild(parrafo)
    })
});


papelera.addEventListener("dragover", event => {
    event.preventDefault();
});

papelera.addEventListener("drop", event => {
    event.preventDefault();
    console.log("Gracias por reciclar");
    const id_parrafo = event.dataTransfer.getData("id")
    const parrafo = document.getElementById(id_parrafo)
    parrafo.classList.add("none")
})





