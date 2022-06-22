//Sacamos la variable creada en la función para que sea global:
let marker, map;

// Initialize and add the map
function initMap() {
    const posicion_1 = {
        lat: 17.315919727475613, 
        lng: -87.53475113655007
    }
    
    const posicion_2 = {
        lat: -28.636385205785302, 
        lng: 153.63655062686678
    }
    
    const posicion_3 = {
        lat: 48.637091048335094,
        lng: -1.5120471060474108
    }
    
    // Situamos el mapa en el div de HTML con id map:
    // Variable sacada como global:
    map = new google.maps.Map(document.getElementById("map"), {
        // Le damos 4 puntos de zoom:
        zoom: 4,
        // Centramos según a posición:
        center: posicion_1
    })

    // Variable sacada como global:
    marker = new google.maps.Marker({
        position: posicion_1,
        map: map,
        title: "Gran agujero Azul, Belice"
    });
    
    marker = new google.maps.Marker({
        position: posicion_2,
        map: map,
        title: "Faro, mirador de la Barrera de Coral, Byron Bay"
    });
    
    marker = new google.maps.Marker({
        position: posicion_3,
        map: map,
        title: "Mont San Michelle, Rennes"
    });
}