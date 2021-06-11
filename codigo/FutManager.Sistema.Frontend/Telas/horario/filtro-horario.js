$(document).ready(function() {

    const btnPreReserva = $("#btnPreReserva");
    const btnVoltar = $("#btn-voltar");

    btnVoltar.click(() => {
        window.location.href = '../pageUsuario.html';
    });

    btnPreReserva.click(() => {
        Notiflix.Confirm.Show(
            'Pré Reserva',
            'Deseja confirmar pré-reserva?',
            'Confirmar',
            'Cancelar',
            confirmarPreReserv, // Confirmar
            function() {}); // Cancelar
    });

    $("#btn-buscar").click(function() {
        const filtro = {
            cidade: $("#input-cidade").val(),
            estado: $("#input-estado").val(),
            horario_inicio: $("#timerpicker-horario-inicio").val(),
            horario_final: $("#timepicker-horario-final").val(),
            data_inicio: $("#datepicker-data-inicio").val(),
            data_final: $("#datepicker-data-final").val()
        };

        validar_filtro(filtro) ? $.get("http://localhost:3000/reservas/horarios_disponiveis", filtro, callback_busca) : false;
    });

    $("#btn-limpar").click(function() {
        $("#input-cidade").val();
        $("#input-estado").val();
        $("#timerpicker-horario-inicio").val('');
        $("#timepicker-horario-final").val('');
        $("#datepicker-data-inicio").val('');
        $("#datepicker-data-final").val('');
        $("table tr").remove();
        $("#container-resultado").css('display', 'none');
    });
});

function confirmarPreReserv() {

    const checkReserva = $("table tr input:checkbox[name=reservar]:checked");

    if (checkReserva.val() == '' || checkReserva.val() == undefined) {
        Notiflix.Notify.Warning('Favor selecionar algum Horário a ser reservado!');
        return false;
    }

    checkReserva.each((index, checkbox) => {
        let params = $(checkbox).val().split('|');
        let data = {
            dia: params[1],
            horario: params[0],
            status: 1
        };

        $.ajax({
            url: "http://localhost:3000/reservas",
            type: "POST",
            dataType: "json",
            contentType: "application/json",
            data: JSON.stringify(data),
            success: function(result) {
                if (result) {
                    window.location.replace("../reserva/lista-reserva.html");
                }
            },
            error: function(err) {
                console.log(err);
                Notiflix.Notify.Warning("Algo inesperado ocorreu! É possível que uma ou mais de suas pré-reserva não foram realizada com sucesso :(");
            }
        });
    });
}

function callback_busca(horarios, status) {
    if (status === "error") {
        alert("Algo inesperado ocorreu durante a busca por horários!");
    } else {
        montar_tabela(horarios);
    }
};

function montar_tabela(horarios) {
    let rows = '';
    horarios.forEach(horario => {
        rows +=
            `<tr>
            <td><input type="checkbox" name="reservar" value="${horario.id_horario}|${horario.dia_disponivel}"></td>
            <td>${horario.nome_quadra}</td>
            <td>${formataData(horario.dia_disponivel)}</td>
            <td>${formataHora(horario.horario_inicio)}</td>
            <td>${formataHora(horario.horario_final)}</td>
            <td>${horario.nota.toFixed(2)} <i class="fas fa-star"></i></td>
        </tr>`;
    });

    $('#table-horarios-disponiveis').append(rows);
    $("#container-resultado").css('display', 'block');
};

function validar_filtro(filtro) {

    const cidade = $("#input-cidade");
    const estado = $("#input-estado");
    const horario_inicio = $("#timerpicker-horario-inicio");
    const horario_final = $("#timepicker-horario-final");
    const data_inicio = $("#datepicker-data-inicio");
    const data_final = $("#datepicker-data-final");

    if (cidade.val() == '' || cidade.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher a Cidade!');
        cidade.focus();
        return false;
    }

    if (estado.val() == '' || estado.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o Estado!');
        estado.focus();
        return false;
    }

    if (horario_inicio.val() == '' || horario_inicio.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o Horário Inicial');
        horario_inicio.focus();
        return false;
    }

    if (horario_final.val() == '' || horario_final.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o Horário Final!');
        horario_final.focus();
        return false;
    }

    if (data_inicio.val() == '' || data_inicio.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher a Data de Início!');
        data_inicio.focus();
        return false;
    }

    if (data_final.val() == '' || data_final.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher a Data Final!');
        data_final.focus();
        return false;
    }
    return true;
};

function formataData(data) {
    dataFormatada = data.substr(0, 10);
    dataFormatada = dataFormatada.split('-');
    return dataFormatada = dataFormatada[2] + '/' + dataFormatada[1] + '/' + dataFormatada[0];
}

function formataHora(hora) {
    return horaFormatada = hora.substr(0, 5);
}