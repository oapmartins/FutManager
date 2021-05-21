$(document).ready(function () {
    buscar_detalhe_reserva();
});

function buscar_detalhe_reserva() {
    const id_reserva = new URLSearchParams(window.location.search).get("id");
    $.get(`http://localhost:3000/reservas/${id_reserva}`, callback_busca);
};

function callback_busca(reserva, status) {
    console.log(reserva);
    console.log(status);
    if (status === "error") {
        alert("Algo inesperado ocorreu durante a busca por detalhes de sua reserva!");
    } else {
            // let rows = '';

            // reservas.forEach(reserva => {
            //     rows += `<li class="list-group-item d-flex justify-content-between align-items-start">
            //                 <div class="ms-2 me-auto">
            //                     <div class="fw-bold">
            //                         <a href="./detalhe-reserva.html">${reserva.id} - ${reserva.nome_quadra} | ${reserva.dia}, de ${reserva.horario_inicio} às ${reserva.horario_final}</a>
            //                     </div>
            //                         ${reserva.endereco_quadra}
            //                 </div>
            //                 <span class="badge bg-primary rounded-pill">${reserva.descricao_status}</span>
            //             </li>`;
            // });

            // let grid = `<ol class="list-group list-group">${rows}<\ol>`;
            // $("#conteudo-placeholder").html(grid);
    }
};