$(document).ready(function() {
    $("#exibir").click(function() {
        $.getJSON("form-data.json", function(result) {
            $("#infos").html("<br>Nome: " + result.nome + "<br>Idade: " + result.idade + "<br>Curso: " + result.curso + "<br>Cidade: " + result.cidade);
        });
    });
});