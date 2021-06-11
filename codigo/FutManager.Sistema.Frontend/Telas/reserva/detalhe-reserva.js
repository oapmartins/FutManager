$(document).ready(function () {
    buscar_detalhe_reserva();

    $("#btn-voltar").click(() => {
        window.location.replace("./lista-reserva.html");
    });
});

function buscar_detalhe_reserva() {
    const id_reserva = new URLSearchParams(window.location.search).get("id");
    $.get(`http://localhost:3000/reservas/${id_reserva}`, callback_busca);
};

function callback_busca(reserva, status) {
    if (status === "error") {
        alert("Algo inesperado ocorreu durante a busca por detalhes de sua reserva!");
    } else {
        let grid = `<ul class="timeline">
                        <li class="timeline-item ${reserva.status >= 1 ? 'bg-success': 'bg-light'} rounded ml-3 p-4 shadow">
                            <div class="timeline-arrow"></div>
                            <h2 class="h5 mb-0">Pré-reserva realizada?</h2><span class="small text-gray"><i
                        </li>
                        <li class="timeline-item ${reserva.status >= 2 ? 'bg-success': 'bg-light'} rounded ml-3 p-4 shadow">
                            <div class="timeline-arrow"></div>
                            <h2 class="h5 mb-0">Pré-reserva paga?</h2><span class="small text-gray"><i
                        </li>
                        <li class="timeline-item ${reserva.status >= 3 ? 'bg-success': 'bg-light'} rounded ml-3 p-4 shadow">
                            <div class="timeline-arrow"></div>
                            <h2 class="h5 mb-0">Avaliar reserva?</h2><span class="small text-gray"><i
                        </li>
                        <li class="timeline-item ${reserva.status >= 4 ? 'bg-success': 'bg-light'} rounded ml-3 p-4 shadow">
                            <div class="timeline-arrow"></div>
                            <h2 class="h5 mb-0">Fim reserva</h2><span class="small text-gray"><i
                        </li>
                    </ul>`;

        $("#detalhe-placeholder").html(grid);
    }
};