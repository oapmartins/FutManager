$(document).ready(function () {
    const btnVoltar = document.querySelector("#btnVoltar");

    buscar_reservas();

    btnVoltar.addEventListener('click',()=>{
        window.location.href = '../pageUsuario.html';
    });
});

function buscar_reservas() {
    $.get("http://localhost:3000/reservas/", callback_busca);
};

function callback_busca(reservas, status) {
    if (status === "error") {
        alert("Algo inesperado ocorreu durante a busca de suas reservas!");
    } else {
        if (reservas.length == 0) {
            $("#conteudo-placeholder").html("<p>Você ainda não realizou nenhuma reserva :(<\p>");
        }
        else {
            let rows = '';

            reservas.forEach(reserva => {
                rows += `<li class="list-group-item d-flex justify-content-between align-items-start" onclick="window.location='detalhe-reserva.html?id=${reserva.id}';">
                            <div class="ms-2 me-auto" style="color:#8a8a8a">
                                <div class="fw-bold">
                                    <a href="./detalhe-reserva.html?id=${reserva.id}">${reserva.id} - ${reserva.nome_quadra} | ${formataData(reserva.dia)}, de ${formataHora(reserva.horario_inicio)} às ${formataHora(reserva.horario_final)}</a>
                                </div>
                                    ${reserva.endereco_quadra}
                            </div>
                            <span class="badge bg-primary rounded-pill">${reserva.descricao_status}</span>
                        </li>`;
            });

            let grid = `<ol class="list-group list-group">${rows}<\ol>`;
            $("#conteudo-placeholder").html(grid);
        }
    }
};

function formataData(data){
    dataFormatada = data.substr(0,10);
    dataFormatada = dataFormatada.split('-');
    return dataFormatada = dataFormatada[2] + '/' + dataFormatada[1] + '/'  + dataFormatada[0];  
}

function formataHora(hora){
    return horaFormatada = hora.substr(0,5);
}