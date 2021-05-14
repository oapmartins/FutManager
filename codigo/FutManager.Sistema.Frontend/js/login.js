/**
 * @author Pedro Damasceno
 * @since 13/05/2021
 */

$(document).ready(function () {

    const btnLogin = $("#btnLogin");
    // Chamada da Função de validação ao clicar no botão de cadastro.
    btnLogin.click(() => {
        if (validaDadosFormulario()) {
            eventoLogin();
        }
    });

});

function eventoLogin() {

    const tipoUsuario = $("#tipoUsuario");

    if (tipoUsuario.val() == 'U') {
        window.location.href = "pageUsuario.html";
    } else {
        window.location.href = "pageGestor.html";
    }
}

function validaDadosFormulario() {

    const campoEmail = $("#email");
    const campoSenha = $("#senha")

    if (campoEmail.val() == "" || campoEmail.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Email!');
        campoEmail.focus();
        return false;
    }

    if (campoSenha.val() == "") {
        Notiflix.Notify.Warning('Favor preecher o campo Senha!');
        campoSenha.focus();
        return false;
    }
    return true;
}