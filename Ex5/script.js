window.onload = function () {
    var getinfo = localStorage.getItem('info');
    var info = JSON.parse(getinfo);
    document.getElementById('nome').value = info.nome;
    document.getElementById('data').value = info.data;
    document.getElementById('campus').value = info.campus;
    document.getElementById('aluno').value = info.aluno;
    document.getElementById('professor').value = info.professor;
    document.getElementById('curso').value = info.curso;
    document.getElementById('melhor').value = info.melhor;
    console.log(info);
}
function salvar() {
    var info = {
        'nome': document.getElementById("nome").value,
        'data': document.getElementById("data").value,
        'campus': document.getElementById("campus").value,
        'aluno': document.getElementById("aluno").value,
        'professor': document.getElementById("professor").value,
        'curso': document.getElementById("curso").value,
        'melhor': document.getElementById("melhor").value
    };
    localStorage.setItem('info', JSON.stringify(info));
}

