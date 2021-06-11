$(document).ready(function () {
    $("#btn-confirmacao").click(confirmar_prereserva);
});

function confirmar_prereserva() {
    const id_reserva = new URLSearchParams(window.location.search).get("id");

    $.ajax({
        url: `http://localhost:3000/reservas/${id_reserva}/confirmacao`,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: {},
        success: function (result) {
            window.location.replace(`../reserva/lista-reserva.html?id=${id_reserva}`);
        },
        error: function (err) {
            console.log(err);
            alert("Algo inesperado ocorreu durante a confirmação de pré-reserva! Tente mais tarde.");
        }
    });
}