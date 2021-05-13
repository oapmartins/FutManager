/**
 * @author Octavio Martins
 * @author Pedro Damasceno
 * @since 13/05/2021
 */


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
    
    // Chamada da Função de consulta do Cep ao alterar o campo.
    campoCep.change(() => {
        consultaCep(campoCep.val());
    });

    // Chamada da Função de validação ao clicar no botão de cadastro.
    btnCadastro.click(()=>{
        if(validaDadosFormulario()){
            Notiflix.Report.Success('Cadastro Usuário', 'Tudo Pronto. Seu cadastro foi realizado com Sucesso!', null, retornarLogin);
        }
    });
});

function retornarLogin(){
    window.location.href = 'login.html'
}

// Função para validação dos dados do formulário.
function validaDadosFormulario() {

    // Variáveis de controle.
    const campoNome = $("#nome");
    const campoSobrenome = $("#sobrenome");
    const campoCpf = $("#cpf");
    const campoDtNascimento = $("#dtNascimento");
    const campoSexo = $("#sexo");
    const campoCelular = $("#celular");
    const campoCep = $("#cep");
    const campoNumeroLocal = $("#numeroLocal");
    const campoEmail = $("#email");
    const campoConfirmEmail = $("#confirmEmail");
    const campoSenha = $("#senha");
    const campoConfirmSenha = $("#confirmSenha");

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
    } else {
        !validaData(campoDtNascimento) ? Notiflix.Notify.Warning('O campo Data de Nascimento esta preenchido com informações inválidas. Favor Verificar!') : true;
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

    if (campoNumeroLocal.val() == "" || campoNumeroLocal.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Número!');
        campoNumeroLocal.focus();
        return false;
    }

    if (campoEmail.val() == "" || campoEmail.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Email!');
        campoEmail.focus();
        return false;
    }

    if (campoConfirmEmail.val() == '') {
        Notiflix.Notify.Warning('Favor confirmar o Email!');
        campoConfirmEmail.focus();
        return false;
    }else{
        if(campoConfirmEmail.val() != campoEmail.val()){
            Notiflix.Notify.Warning('Os E-mails informados não coincidem!');
            campoConfirmEmail.focus();
            return false;
        }
    }

    if (campoSenha.val() == "") {
        Notiflix.Notify.Warning('Favor preecher o campo Senha!');
        campoSenha.focus();
        return false;
    }

    if (campoConfirmSenha.val() == "") {
        Notiflix.Notify.Warning('Favor confirmar a Senha!');
        campoConfirmSenha.focus();
        return false;
    }else{
        if(campoConfirmSenha.val() != campoSenha.val()){
            Notiflix.Notify.Warning('As senhas informadas não coincidem. Favor Verificar!');
            campoConfirmSenha.focus();
            return false;
        }
    }
    return true;
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

// Função para validar datas.
function validaData(campo) {

    const valorData = campo.val();
    dtFormatada = valorData.split("-");
    dtFormatada = dtFormatada[2] + '/' + dtFormatada[1] + '/' + dtFormatada[0];

    var date = dtFormatada;
    var ardt = new Array;
    var ExpReg = new RegExp("(0[1-9]|[12][0-9]|3[01])/(0[1-9]|1[012])/[12][0-9]{3}");
    ardt = date.split("-");
    erro = false;
    if (date.search(ExpReg) == -1) {
        erro = true;
    } else if (((ardt[1] == 4) || (ardt[1] == 6) || (ardt[1] == 9) || (ardt[1] == 11)) && (ardt[0] > 30))
        erro = true;
    else if (ardt[1] == 2) {
        if ((ardt[0] > 28) && ((ardt[2] % 4) != 0))
            erro = true;
        if ((ardt[0] > 29) && ((ardt[2] % 4) == 0))
            erro = true;
    }
    if (erro) {
        return false;
    }
    return true;
}

// Função para consultar o Cep do usuário.
function consultaCep(valorCep) {
    console.log(valorCep);
    var cep = valorCep.replace(/[^0-9]/, '');
    if (cep) {
        var url = `https://viacep.com.br/ws/${cep}/json/`;
        $.ajax({
            url: url,
            dataType: 'jsonp',
            crossDomain: true,
            contentType: "application/json",
            success: function(retornoEndereco) {
                if (retornoEndereco.erro != true) {
                    $('#endereco').attr('disabled', 'disabled').val(retornoEndereco.logradouro);
                    $('#bairro').attr('disabled', 'disabled').val(retornoEndereco.bairro);
                    $('#cidade').attr('disabled', 'disabled').val(retornoEndereco.localidade);
                    $('#estado').attr('disabled', 'disabled').val(retornoEndereco.uf);
                } else {
                    $('#endereco').removeAttr('disabled').val('');
                    $('#bairro').removeAttr('disabled').val('');
                    $('#cidade').removeAttr('disabled').val('');
                    $('#estado').removeAttr('disabled').val('');
                }
            }
        });
    }
}

// Função para validar Email.
function validaEmail(email) {
    var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return filter.test(email);
}