$(document).ready(function() {
    $.get(`http://localhost:3000/reservas/relatorio/avaliacao-por-mes`, callback_busca);
});

function callback_busca(avaliacao, status) {
    if (status === "error") {
        alert("Algo inesperado ocorreu durante a busca por relatório de avaliacao!");
    } else {
        console.log(avaliacao);
    }

}
