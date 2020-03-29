function geolocation() {
    let mapa = document.getElementById("map");
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(function (location) {
            mapa.innerHTML = "Latitude: " + location.coords.latitude + 
            "<br> Longitude: " + location.coords.longitude
        });
    } else {
        mapa.innerText = 'Api de geolocalizacao';
    }
}

//Funciton geolocation serve para buscar a localização do usuário, através da permisssão que o usuário dá a
//ao navegador