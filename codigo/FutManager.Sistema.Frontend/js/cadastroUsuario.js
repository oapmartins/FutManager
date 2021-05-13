'use strict'
// Implementação API para CEP
const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

// uso da API para completar endereço do usuario
const pesquisarCep = async () => {
    const cep = document.getElementById('cep').value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    preencherFormulario(endereco);
    console.log(endereco);
}
document.getElementById('cep').addEventListener('focusout', pesquisarCep)


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


}

//validação se o CPF é verdadeiro
function validarCPF() {
    var cpf = document.getElementById("cpf")
    var ok;
    cpf = cpf.replace(/[^\d]+/g, '');
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "000.000.000-00" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999") {
        alert("CPF inválido");
        cpf.focus();
        ok = false;
        return false;
    }
}

//valida mascara CPF
function mascaraCPF() {
    var cpf = document.getElementById("cpf")

    if (cpf.value.length == 3 || cpf.value.length == 7) {
        cpf.value += "."
    } else if (cpf.value.length == 11) {
        cpf.value += "-"
    }
}