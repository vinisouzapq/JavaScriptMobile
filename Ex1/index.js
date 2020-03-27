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