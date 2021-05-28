/**
 * @author Octavio Martins
 * @since 21/05/2021
 */

$(document).ready(function() {

    // Variáveis de controle.
    const campoCnpj = $("#cnpj");
    const campoTelefoneContato = $("#telefoneContato");
    const campoCep = $("#cep");
    const adicionarImagens = $("#addImagens");
    const btnCadastro = $("#btnCadastro");

    // Iniciando o Documento com as máscaras.
    campoCnpj.mask('99.999.999/9999-99');
    campoCep.mask('00000-000');
    campoTelefoneContato.mask('(99) 99999-9999');

    // Chamada da Função de consulta do Cep ao alterar o campo.
    campoCep.change(() => {
        consultaCep(campoCep.val());
    });

    // Chamada da Função de validação ao clicar no botão de cadastro.
    btnCadastro.click(() => {
        const retornoValidaDadosForm = validaDadosFormulario();
        if (!retornoValidaDadosForm) {
            return false;
        }
        cadastrarQuadra();
    });

    document.querySelector('#addImagens').addEventListener("click", clickImagem);
    document.getElementById("img-input").addEventListener("change", mostrarPreviewImagem, false);
    // Adicionando preview da imagem
});

function clickImagem(){
    $("#img-input").click();
}

function retornarInicioGestor() {
    window.location.href = 'pageGestor.html'
}

// Função para validação dos dados do formulário.
function validaDadosFormulario() {

    // Variáveis de controle.
    const campoRazaoSocial = $("#razaoSocial");
    const campoNomeFantasia = $("#nomeFantasia");
    const campoCnpj = $("#cnpj");
    const campoTelefoneContato = $("#telefoneContato");
    const campoCep = $("#cep");
    const campoLogradouro = $("#logradouro");
    const campoNumeroLocal = $("#numeroLocal");
    const campoBairro = $("#bairro");
    const campoCidade = $("#cidade");
    const campoEstado = $("#estado");

    if (campoRazaoSocial.val() == "" || campoRazaoSocial.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Razão Social!');
        campoRazaoSocial.focus();
        return false;
    }

    if (campoNomeFantasia.val() == "" || campoNomeFantasia.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Nome Fantasia!');
        campoNomeFantasia.focus();
        return false;
    }

    if (campoCnpj.val() == "" || campoCnpj.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo CNPJ!');
        campoCnpj.focus();
        return false;
    } else {
        if (!validarCNPJ(campoCnpj.val())) {
            Notiflix.Notify.Warning('O campo CNPJ está preenchido com informações inválidas. Favor Verificar!');
            campoCnpj.focus();
            return false;
        }
    }

    if (campoTelefoneContato.val() == "" || campoTelefoneContato.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Telefone!');
        campoTelefoneContato.focus();
        return false;
    }

    if (campoCep.val() == "" || campoCep.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo CEP!');
        campoCep.focus();
        return false;
    }

    if (campoLogradouro.val() == "" || campoLogradouro.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Logradouro!');
        campoLogradouro.focus();
        return false;
    }

    if (campoNumeroLocal.val() == "" || campoNumeroLocal.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Número!');
        campoNumeroLocal.focus();
        return false;
    }

    if (campoBairro.val() == "" || campoBairro.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Bairro!');
        campoBairro.focus();
        return false;
    }

    if (campoCidade.val() == "" || campoCidade.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Cidade!');
        campoCidade.focus();
        return false;
    }

    if (campoEstado.val() == "" || campoEstado.val() == undefined) {
        Notiflix.Notify.Warning('Favor preencher o campo Estado!');
        campoEstado.focus();
        return false;
    }

    return true;
}

// Função para validação de CNPJ.
function validarCNPJ(cnpj) {

    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj == '') return false;

    if (cnpj.length != 14)
        return false;

    // Elimina CNPJs invalidos conhecidos
    if (cnpj == "00000000000000" ||
        cnpj == "11111111111111" ||
        cnpj == "22222222222222" ||
        cnpj == "33333333333333" ||
        cnpj == "44444444444444" ||
        cnpj == "55555555555555" ||
        cnpj == "66666666666666" ||
        cnpj == "77777777777777" ||
        cnpj == "88888888888888" ||
        cnpj == "99999999999999")
        return false;

    // Valida DVs
    tamanho = cnpj.length - 2
    numeros = cnpj.substring(0, tamanho);
    digitos = cnpj.substring(tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(0))
        return false;

    tamanho = tamanho + 1;
    numeros = cnpj.substring(0, tamanho);
    soma = 0;
    pos = tamanho - 7;
    for (i = tamanho; i >= 1; i--) {
        soma += numeros.charAt(tamanho - i) * pos--;
        if (pos < 2)
            pos = 9;
    }
    resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
    if (resultado != digitos.charAt(1))
        return false;

    return true;

}

// Função para consultar o Cep do usuário.
function consultaCep(valorCep) {
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
                    $('#logradouro').attr('disabled', 'disabled').val(retornoEndereco.logradouro);
                } else {
                    $('#endereco').removeAttr('disabled').val('');
                    $('#bairro').removeAttr('disabled').val('');
                    $('#cidade').removeAttr('disabled').val('');
                    $('#estado').removeAttr('disabled').val('');
                    $('#logradouro').removeAttr('disabled').val('');
                }
            }
        });
    }
}

// Metodo para cadastro de Quadras.
async function cadastrarQuadra() {

    const campoRazaoSocial = $("#razaoSocial");
    const campoNomeFantasia = $("#nomeFantasia");
    const campoCnpj = $("#cnpj");
    const campoTelefoneContato = $("#telefoneContato");
    const campoObservacao = $("#observacao");

    const campoCep = $("#cep");
    const campoLogradouro = $("#logradouro");
    const campoNumeroLocal = $("#numeroLocal");
    const campoBairro = $("#bairro");
    const campoCidade = $("#cidade");
    const campoEstado = $("#estado");
    const campoPontoReferencia = $("#pontoReferencia");

    // Retirando carácteres especiais para gravar no banco.
    let campoTelefoneLimpo = campoTelefoneContato.val().replace(/[\D]+/g, '');

    const objCadastro = {
        razao_social: campoRazaoSocial.val(),
        nome_fantasia: campoNomeFantasia.val(),
        cnpj: campoCnpj.val(),
        telefone: campoTelefoneLimpo,
        observacao: campoObservacao.val(),
        endereco: {
            logradouro: campoLogradouro.val(),
            bairro: campoBairro.val(),
            cidade: campoCidade.val(),
            estado: campoEstado.val(),
            numero: campoNumeroLocal.val(),
            ponto_referencia: campoPontoReferencia.val(),
            cep: campoCep.val()
        }
    };

    // Validar CNPJ 
    let response = await fetch(`http://localhost:3000/Quadras`, {
        method: 'POST',
        body: JSON.stringify(objCadastro),
        headers: {
            'Origin': 'http://localhost:3000/Quadras',
            "Content-Type": "application/json"
        },
        mode: 'cors',
        cache: 'default',
    });
    response = await response.json();
    if (!response.error) {
        Notiflix.Report.Success('Cadastro de Quadras', 'Cadastro de quadra realizado com Sucesso!', null, retornarInicioGestor);
    }
}

// Mostrar preview da imagem cadastrada pelo usuário.
function mostrarPreviewImagem() {

    // $("#img-container").append('<img id="previewImagem" src="">');

    if (this.files && this.files[0]) {
        var file = new FileReader();
        file.onload = function(e) {
            document.getElementById("previewImagem").src = e.target.result;
        };
        file.readAsDataURL(this.files[0]);
    }
}