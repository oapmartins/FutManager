$(document).ready(function () {
    notificacaoAvaliacao();
    
    buscar_reservas();

    $("#btnVoltar").click(() => {
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
                rows += montar_row(reserva);
            });

            apresentar_grid(montar_grid(rows));
        }
    }
};

function montar_row(reserva) {
    return `<li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto" style="color:#8a8a8a">
                    <div class="fw-bold">
                        <a href="./detalhe-reserva.html?id=${reserva.id}">${reserva.id} - ${reserva.nome_quadra} | ${formatarData(reserva.dia)}, de ${formatarHora(reserva.horario_inicio)} às ${formatarHora(reserva.horario_final)}</a>
                    </div>
                        ${reserva.endereco_quadra}
                </div>
                ${reserva.status == 6 ? montar_modal_avaliacao(reserva) : ''}
                <span class="badge bg-primary rounded-pill">${reserva.descricao_status}</span>
            </li>`;
}

function montar_grid(rows) {
    return `<ol class="list-group list-group">${rows}<\ol>`;
}

function apresentar_grid(grid) {
    $("#conteudo-placeholder").html(grid);
}

function montar_modal_avaliacao(reserva = null) {
    return `<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong">
            Avaliar
            </button>
            
            <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="input-group mb-3">
                    <div class="input-group-prepend">
                    <label class="input-group-text" for="option-avaliacao">Nota</label>
                    </div>
                    <select class="custom-select" id="option-avaliacao">
                        <option values='1'>Uma estrela</option>
                        <option value="2">duas estrelas</option>
                        <option value="3">Três estrelas</option>
                        <option value="4">Quatro estrelas</option>
                        <option selected value="5">Cinco estrelas</option>
                    </select>
                </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">fechar</button>
                    <button type="button" class="btn btn-primary" onclick="postar_avaliacao(${reserva.id});">Avaliar</button>
                </div>
                </div>
            </div>
            </div>`;
}

function postar_avaliacao(reserva_id) {
    let nota = $('#option-avaliacao option:selected').val();

    $.ajax({
        url: `http://localhost:3000/reservas/${reserva_id}/avaliacoes`,
        type: "POST",
        dataType: "json",
        contentType: "application/json",
        data: JSON.stringify({
            nota: nota
        }),
        success: function (result) {
            alert('Avaliação enviada, obrigado');
            location.reload();
        },
        error: function (err) {
            console.log(err);
            alert("Algo inesperado ocorreu durante a confirmação de sua avaliação! Tente mais tarde.");
        }
    });
}

function formatarData(data) {
    dataFormatada = data.substr(0, 10);
    dataFormatada = dataFormatada.split('-');
    return dataFormatada = dataFormatada[2] + '/' + dataFormatada[1] + '/' + dataFormatada[0];
}

function formatarHora(hora) {
    return horaFormatada = hora.substr(0, 5);
}

function notificacaoAvaliacao() {
    Notiflix.Confirm.Show(
        'Avaliação FutManager',
        'Você poderia avaliar os nossos serviços?',
        'Sim',
        'Não',
        function() {
            window.location.href = '../avaliacoes.html'
        }, // Confirmar
        function() {
            
        });
}