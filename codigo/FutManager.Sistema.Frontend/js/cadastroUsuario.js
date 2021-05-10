
//validação de campos vazios
function validar() {

    //verificar se nome está vazio
    var nome = document.getElementById("nome");
    if (nome.value == "") {
        alert("Nome não informado")
        nome.focus();
        return false;
    }

    //verificar se o sobrenome está vazio
    var sobrenome = document.getElementById("sobrenome");
    if (sobrenome.value == "") {
        alert("Sobrenome não informado");
        sobrenome.focus();
        return false;
    }

    //verificar se o CPF está vazio
    var cpf = document.getElementById("cpf");
    if (cpf.value == "") {
        alert("CPF não informado");
        cpf.focus();
        return false;
    }

    //verificar se o DataNascimento está vazio
    var dtNascimento = document.getElementById("dtNascimento");
    if (dtNascimento.value == "") {
        alert("Data nascimento não informada");
        dtNascimento.focus();
        return false;
    }

    //verificar se o sexo está vazio
    var sexo = document.getElementById("sexo");
    if (sexo.options[sexo.selectedIndex].value == "") {
        alert("Selecione um sexo antes de prosseguir");
    }



    //verificar se o celular está vazio
    var celular = document.getElementById("celular");
    if (celular.value == "") {
        alert("Celular não informado");
        celular.focus();
        return false;
    }

    //verificar se o CEP está vazio
    var cep = document.getElementById("cep");
    if (cep.value == "") {
        alert("CEP não informado");
        cep.focus();
        return false;
    }

    //verificar se o numero está vazio
    var numeroLocal = document.getElementById("numeroLocal");
    if (cep.value == "") {
        alert("Número não informado");
        numeroLocal.focus();
        return false;
    }

    //verificar se o CEP está vazio
    var cep = document.getElementById("cep");
    if (cep.value == "") {
        alert("CEP não informado");
        cep.focus();
        return false;
    }

    //verificar se o completo está vazio
    var complemento = document.getElementById("complemento");
    if (complemento.value == "") {
        alert("complemento não informado");
        complemento.focus();
        return false;
    }

    //verificar se o ponto referencia está vazio
    var nomeFantasia = document.getElementById("nomeFantasia");
    if (nomeFantasia.value == "") {
        alert("Ponto de referencia não informado");
        nomefantasia.focus();
        return false;
    }


}

//validação se o CPF é verdadeiro
