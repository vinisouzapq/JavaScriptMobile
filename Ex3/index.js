function vibrar1() {
    console.log("Primeira vibração")
    navigator.vibrate('450');
    console.log("Fim da primeira vibração")
}
function vibrar2() {
    console.log("Segunda Vibração")
    navigator.vibrate(['100', '150', '200', '250']);
    console.log("Fim da segunda vibração")
}
function vibrar3() {
    console.log("Terceira vibração")
    navigator.vibrate(['250', '200', '150', '100']);
    console.log("Fim da terceira vibração")
}
//Funções para fazer o dispositivo vibrar
