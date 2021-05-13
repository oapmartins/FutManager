
function validarEmail() {
    //verificar se email está vazio
    var email = document.getElementById("email");
    var filtro = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (email.value == "") {
        alert("E-mail não informado")
        email.focus();
        return false;
    }

    if(!filtro.test(email.value)) {
        alert("Digite um e-mail válido");
        email.focus();
            return false;
    }

    //verificar se confirmar email está vazio
    var confirmEmail = document.getElementById("confirmEmail");
    if (confirmEmail.value == "") {
        alert("Confirmar e-mail não informado")
        confirmEmail.focus();
        return false;
    }

    //verificar e-mail são iguais
    if (confirmEmail.value == email.value) {
        return true;
    } else {
        alert("E-mails são diferentes")
        confirmEmail.focus();
        return false;
    }



}


function validarSenha() {

    //verificar se senha está vazio
    var senha = document.getElementById("senha");
    if (senha.value == "") {
        alert("Senha não informado")
        senha.focus();
        return false;
    }

    //verificar se senha está vazio
    var confirmSenha = document.getElementById("confirmSenha");
    if (confirmSenha.value == "") {
        alert("Confirmar senha não informado")
        confirmSenha.focus();
        return false;
    }


    //verificar senhas são iguais
    if (senha.value == confirmSenha.value) {
        return true;
    } else {
        alert("Senhas são diferentes")
        senha.focus();
        return false;
    }

}