$(document).ready(function () {
    $("#container-resultado").hide();

    $("#btn-buscar").click(function () {
        const filtro = {
            cidade: $("#input-cidade").val(),
            estado: $("#input-estado").val(),
            horario_inicio: $("#timerpicker-horario-inicio").val(),
            horario_final: $("#timepicker-horario-final").val(),
            data_inicio: $("#datepicker-data-inicio").val(),
            data_final: $("#datepicker-data-final").val()
        };

        validar_filtro(filtro);

        $.get("http://localhost:3000/reservas/horariosDisponiveis", filtro, callback_busca);
    });

    $("#btn-limpar").click(function () {
        $("#input-cidade").val();
        $("#input-estado").val();
        $("#timerpicker-horario-inicio").val('');
        $("#timepicker-horario-final").val('');
        $("#datepicker-data-inicio").val('');
        $("#datepicker-data-final").val('');
        $("table tr").remove();
        $("#container-resultado").hide();
    });

    $("#btn-confirmar-reserva").click(function () {
        $("table tr input:checkbox[name=reservar]:checked")
            .each((index, checkbox) => {
                let params = $(checkbox).val().split('|');
                let data = {
                    dia: params[1],
                    horario: params[0],
                    confirmada: 0
                };

                $.ajax({
                    url: "http://localhost:3000/reservas",
                    type: "POST",
                    dataType: "json",
                    contentType: "application/json",
                    data: JSON.stringify(data),
                    success: function (result) {
                        alert("Pré-reserva realizada com sucesso!")
                    },
                    error: function (err) {
                        console.log(err);
                    }
                });
            });


        // apresentar modal com os horários selecionados
        // usar spinner
    });
});

function callback_busca(horarios, status) {
    if (status === "error") {
        alert("Algo inesperado ocorreu durante a busca por horários!");
        return;
    }

    montar_tabela(horarios);
};

function montar_tabela(horarios) {
    let rows = '';

    horarios.forEach(horario => {
        rows +=
            `<tr>
            <td><input type="checkbox" name="reservar" value="${horario.id_horario}|${horario.dia_disponivel}"></td>
            <td>${horario.nome_quadra}</td>
            <td>${horario.dia_disponivel}</td>
            <td>${horario.horario_inicio}</td>
            <td>${horario.horario_final}</td>
        </tr>`;
    });

    $('#table-horarios-disponiveis').append(rows);
    $("#container-resultado").show();
};

function validar_filtro(filtro) {

};