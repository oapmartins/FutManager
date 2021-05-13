$(document).ready(function() {

    // Variáveis de controle.
    const campoCpf = $('#cpf');
    const campoCep = $('#cep');
    const campoCelular = $('#celular');
    const btnCadastro = $("#btnCadastro");

    // Iniciando o Documento com as máscaras.
    campoCpf.mask('999.999.999-99');
    campoCep.mask('00000-000');
    campoCelular.mask('(00) 00000-0000');

    // Evendo de click no botão cadastrar
    btnCadastro.click(() => {
        validaDadosFormulario();
    });
});

// Implementação API para CEP
const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}

// uso da API para completar endereço do usuario
const pesquisarCep = async(cep) => {
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    const dados = await fetch(url);
    const endereco = await dados.json();
    console.log(endereco);
    preencherFormulario(endereco);
}
document.getElementById('cep').addEventListener('focusout', pesquisarCep)

// Função para validação dos dados do formulário.
function validaDadosFormulario() {

    const campoNome = $("#nome");
    const campoSobrenome = $("#sobrenome");
    const campoCpf = $("#cpf");
    const campoDtNascimento = $("#dtNascimento");
    const campoSexo = $("#sexo");
    const campoCelular = $("#celular");
    const campoCep = $("#cep");
    const numeroLocal = $("#numeroLocal");

    if (campoNome.val() == "" || campoNome.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo nome!');
        campoNome.focus();
        return false;
    }

    if (campoSobrenome.val() == "" || campoSobrenome.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Sobrenome!');
        campoSobrenome.focus();
        return false;
    }

    if (campoCpf.val() == "" || campoCpf.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo CPF!');
        campoCpf.focus();
        return false;
    } else {
        if (!validarCPF(campoCpf.val())) {
            Notiflix.Notify.Warning('O campo CPF está preenchido com informações inválidas. Favor Verificar!');
            campoCpf.focus();
            return false;
        }
    }

    if (campoDtNascimento.val() == "" || campoDtNascimento.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Data de Nascimento!');
        campoDtNascimento.focus();
        return false;
    }

    if (campoSexo.val() == "" || campoSexo.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Sexo!');
        campoSexo.focus();
        return false;
    }

    if (campoDtNascimento.val() == "" || campoDtNascimento.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Data de Nascimento!');
        campoDtNascimento.focus();
        return false;
    }

    if (campoCelular.val() == "" || campoCelular.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Celular!');
        campoCelular.focus();
        return false;
    }

    if (campoCep.val() == "" || campoCep.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo CEP!');
        campoCep.focus();
        return false;
    }
    numeroLocal

    if (numeroLocal.val() == "" || numeroLocal.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Número!');
        numeroLocal.focus();
        return false;
    }
}

// Função para validação de CPF.
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf == '') return false;

    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 ||
        cpf == "00000000000" ||
        cpf == "11111111111" ||
        cpf == "22222222222" ||
        cpf == "33333333333" ||
        cpf == "44444444444" ||
        cpf == "55555555555" ||
        cpf == "66666666666" ||
        cpf == "77777777777" ||
        cpf == "88888888888" ||
        cpf == "99999999999")
        return false;

    // Valida 1 digito	
    let add = 0;
    for (let i = 0; i < 9; i++)
        add += parseInt(cpf.charAt(i)) * (10 - i);
    let rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(9)))
        return false;

    // Valida 2 digito	
    add = 0;
    for (let i = 0; i < 10; i++)
        add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11)
        rev = 0;
    if (rev != parseInt(cpf.charAt(10)))
        return false;
    return true;
}