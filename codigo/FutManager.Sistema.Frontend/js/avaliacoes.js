$(document).ready(function () {
    const btnAvaliar = document.querySelector("#btnAvaliar");
    const btnVoltar = document.querySelector("#btnVoltar");
    const objUsuario = localStorage;

    btnAvaliar.addEventListener('click',()=>{
        cadastrarAvaliacao();
    });

    btnVoltar.addEventListener('click',()=>{
        window.location.href = 'pageUsuario.html';
    });
});

async function cadastrarAvaliacao(){

    const id = localStorage.id;
    const nome = localStorage.nome;
    const nota = document.querySelector("#nota");
    const comentario = document.querySelector("#comentario");
    console.log(id);

    let response = await fetch(`http://localhost:3000/avaliacoes-usuario`, {
        method: 'POST',
        body: JSON.stringify({
            nota: nota.value,
            observacao: comentario.value,
            cliente: id
        }),
        headers: {
            'Origin': 'http://localhost:3000/avaliacoes-usuario',
            "Content-Type": "application/json"
        },
        mode: 'cors',
        cache: 'default',
    });

    if (!response.error) {
        Notiflix.Report.Success('Avaliação', 'Avaliação realizada com sucesso!');
    }
} 