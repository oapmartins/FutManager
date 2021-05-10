function validar() {

    //verificar se email está vazio
    var email = document.getElementById("email");
    if (email.value == "") {
        alert("E-mail não informado")
        email.focus();
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

    //verificar se confirmar email está vazio
    var confirmEmail = document.getElementById("confirmEmail");
    if (confirmEmail.value == "") {
        alert("Confirmar e-mail não informado")
        confirmEmail.focus();
        return false;
    }


    //verificar se senha está vazio
    var senha = document.getElementById("senha");
    if (senha.value == "") {
        alert("Confirmar e-mail não informado")
        senha.focus();
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