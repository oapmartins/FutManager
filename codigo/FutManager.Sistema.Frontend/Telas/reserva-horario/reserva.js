$(document).ready(function () {
    $("#container-resultado").hide();

    $("#btn-buscar").click(function () {
        // let horarioList = $.ajax( "endpoint", {param: 'bla, bla, bla'});

        // if (any) // dropdown nenhum registro encontrado

        // horarioList.forEach(horario => {
        //     $('#here_table table').append( '<tr><td>' + horario + '</td></tr>' );
        // });

        // $("#container-resultado").show();
    });

    $("#btn-limpar").click(function () {
        // limpar campos
        $.getJSON("http://localhost:3000/boletos", function(result){
            $("#container-resultado").show();
        });
    });

    $("#btn-confirmar-reserva").click(function () {
        // apresentar modal com os horários selecionados
        // usar spinner
    });
});