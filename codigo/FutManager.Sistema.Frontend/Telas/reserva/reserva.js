$(document).ready(function() {
    buscar_reservas();
});

function buscar_reservas() {
    $.get("http://localhost:3000/reservas/", callback_busca);
};

function callback_busca(reservas, status) {
    if (status === "error") {
        alert("Algo inesperado ocorreu durante a busca de suas reservas!");
    } else{
        if (reservas.length == 0) {
            $("#conteudo-placeholder").html("<p>Você ainda não realizou nenhuma reserva :(<\p>");
        }
        else {
            let rows = '';

            reservas.forEach(reserva => {
                rows += `<li class="list-group-item d-flex justify-content-between align-items-start">
                            <div class="ms-2 me-auto">
                                <div class="fw-bold">
                                    <a href="./detalhe-reserva.html">${reserva.id} - ${reserva.nome_quadra} | ${reserva.dia}, de ${reserva.horario.inicio} às ${reserva.horario.final}</a>
                                </div>
                                    ${reserva.endereco_quadra}
                            </div>
                            <span class="badge bg-primary rounded-pill">${reserva.status}</span>
                        </li>`;         
            });

            let grid = `<ol class="list-group list-group">${rows}<\ol>`;
            $("#conteudo-placeholder").html(grid);
        }
    }
};