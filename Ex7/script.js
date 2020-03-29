function userLocation() {
    fetchIpAddress().then(function (ipAddress) {
        //sucesso//
        console.log(ipAddress);
        let user = document.getElementById("localizacao");
        user.value = ipAddress.city + " - " + ipAddress.region;
    }, function (value) {
        //not called
    });;
}

function fetchIpAddress() {
    return fetch('https://ipinfo.io', {
        headers: {
            "Accept": "application/json"
        }
    })
        .then((r) => r.json());
}

window.onload = function () {
    userLocation();
};