window.onload = function () {
    let naoPreenchido = false;
    if (localStorage.getItem("nome") ? includeNome() : naoPreenchido = true);
    if (localStorage.getItem("favorita") ? includeFavorita() : naoPreenchido = true);
    if (localStorage.getItem("age") ? includeIdade() : naoPreenchido = true);
    if (localStorage.getItem("cidade") ? includeCidade() : naoPreenchido = true);

    if (naoPreenchido)
        document.getElementById("naoPreenchido").style.display = 'block';
}

function Salvar() {
    localStorage.setItem("nome", document.getElementById("nome").value);
    localStorage.setItem("favorita", document.getElementById("favorita").value);
    localStorage.setItem("age", document.getElementById("age").value);
    localStorage.setItem("cidade", document.getElementById("cidade").value);
}

function includeNome() {
    document.getElementById("nomeh").innerHTML = localStorage.getItem("nome");
    document.getElementById("nome").value = localStorage.getItem("nome");
}

function includeIdade() {
    document.getElementById("ageh").innerHTML = localStorage.getItem("age");
    document.getElementById("age").value = localStorage.getItem("age");
}

function includeFavorita() {
    document.body.style.backgroundColor = localStorage.getItem("favorita");
    document.getElementById("favorita").value = localStorage.getItem("favorita");
}

function includeCidade() {
    document.getElementById("cidadeh").innerHTML = localStorage.getItem("cidade");
    document.getElementById("cidade").value = localStorage.getItem("cidade");
}