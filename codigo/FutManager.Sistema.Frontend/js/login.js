/**
 * @author Pedro Damasceno
 * @since 13/05/2021
 */

$(document).ready(function() {

    const btnLogin = $("#btnLogin");

    // Chamada da Função de validação ao clicar no botão de cadastro.
    btnLogin.click(() => {
        if (validaDadosFormulario()) {
            login().then(
                response =>
                {
                    localStorage.setItem('usuario',response);
                    if(response.isAuthenticated){
                        if (response.tipo == 'cliente') {
                            window.location.href = "pageUsuario.html";
                        } 
                        if(response.tipo == 'gestor'){
                            window.location.href = "pageGestor.html";
                        }
                    }
                    else{
                        Notiflix.Notify.Warning('O campo de email ou senha estão preenchidos com informações inválidas. Favor Verificar!');
                    }
                    
                }
            ).catch(
                () => {
                    Notiflix.Notify.Warning('Erro ao validar os dados.');
                }
            );
        }
    });

});

function validaDadosFormulario() {

    const campoEmail = $("#email");
    const campoSenha = $("#senha")

    if (campoEmail.val() == "" || campoEmail.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Email!');
        campoEmail.focus();
        return false;
    }

    if (campoSenha.val() == "" || campoSenha.val() == undefined) {
        Notiflix.Notify.Warning('Favor preecher o campo Senha!');
        campoSenha.focus();
        return false;
    }
    return true;
}

function login() {
    const campoEmail = $("#email");
    const campoSenha = $("#senha")
    const campoTipoUsuario = $("#tipoUsuario");

    objLogin = {
        email: campoEmail.val(),
        senha: campoSenha.val(),
        tipo: campoTipoUsuario.val()
    }

    let response = fetch(`http://localhost:3000/login`, {
        method: 'POST',
        body: JSON.stringify(objLogin),
        headers: {
            'Origin': 'http://localhost:3000/login',
            "Content-Type": "application/json"
        },
        mode: 'cors',
        cache: 'default',
    }).then(response => response.json().then(response => response));
    return response;
}