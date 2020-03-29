window.onload = function () {
    document.getElementById("memoria").innerHTML = navigator.deviceMemory;
    if (navigator.onLine ? conexao.innerHTML = "Conectado" : conexao.innerHTML = "Desconectado" );   
    document.getElementById("language").innerHTML = navigator.language;
    document.getElementById("user").innerHTML = navigator.userAgent;

};