$(document).ready(function() {
    const btnVoltar = document.querySelector("#btnVoltar");

    buscarQuadras();

    btnVoltar.addEventListener('click', () => {
        window.location.href = 'pageGestor.html';
    });
});

function buscarQuadras() {
    $.get("http://localhost:3000/quadras/", callback_busca);
};

function callback_busca(quadras, status) {

    console.log(quadras, status);

    if (status === "error") {
        alert("Algo inesperado ocorreu durante a busca de suas quadras!");
    } else {
        if (quadras.length == 0) {
            $("#conteudo-placeholder").html("<p>Você ainda não possui nenhuma Quadra Cadastrada :(<\p>");
        } else {
            let rows = '';

            quadras.forEach(quadra => {

                // <label> | Endereço: ${quadra.endereco}</label>
                // <label> | Horários: ${quadra.horarios}</label>

                let observacoes = quadra.observacao == ''? 'Sem observações' : quadra.observacao;

                rows += `<li class="list-group-item d-flex justify-content-between align-items-start" onclick="window.location='detalhe-quadra.html?id=${quadra.id}';">
                            <div class="ms-2 me-auto" style="color:#8a8a8a">
                                <div class="fw-bold">
                                    <a href="./detalhe-quadra.html?id=${quadra.id}">${quadra.id} - ${quadra.nome_fantasia}</a>
                                </div>
                                    <label>CNPJ: ${quadra.cnpj}</label>

                                    <label> | Telefone: ${mascaraTelefone(quadra.telefone)}</label>
                                    <label> | Criado no dia: ${formataData(quadra.published_at)}</label>
                                    <br>
                                    <label>Observações: ${observacoes}</label>
                            </div>
                        </li>`;
            });

            let grid = `<ol class="list-group list-group">${rows}<\ol>`;
            $("#conteudo-placeholder").html(grid);
        }
    }
};


function formataData(data) {
    dataFormatada = data.substr(0, 10);
    dataFormatada = dataFormatada.split('-');
    return dataFormatada = dataFormatada[2] + '/' + dataFormatada[1] + '/' + dataFormatada[0];
}

function mascaraTelefone(tel) {
    tel = tel.replace(/\D/g, "")

    tel = tel.replace(/(.{0})(\d)/, "$1($2")
    tel = tel.replace(/(.{3})(\d)/, "$1) $2")
    tel = tel.replace(/(.{9})(\d)/, "$1-$2")
    return tel;
}