window.onload = function () {
    document.getElementById("memoria").innerHTML = navigator.deviceMemory;
    document.getElementById("connection").innerHTML = navigator.onLine;
    document.getElementById("language").innerHTML = navigator.language;
    document.getElementById("user").innerHTML = navigator.userAgent;

};