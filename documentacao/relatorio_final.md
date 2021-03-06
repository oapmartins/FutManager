# Fut Manager

**Mateus Gomes Pereira Silva, mateus.silva.1004445@sga.pucminas.br**

**Octavio Augusto Pereira Martins, oapmartins@sga.pucminas.br**

**Pedro Henrique Damasceno Dias, pedro.hdias@outlook.com**

**Samuel Ribeiro de Freitas, srfreitas97@gmail.com**

**Thiago Costa de Souza Pereira, tcspereira@sga.pucminas.br**

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade / Curso de Sistemas de Informação, Unidade São Gabriel_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Resumo**. Escrever aqui o resumo. O resumo deve contextualizar rapidamente o trabalho, descrever seu objetivo e, ao final, 
mostrar algum resultado relevante do trabalho (até 10 linhas)._

---

## 1. Introdução

O FutManager será uma plataforma online que irá reunir jogadores de futebol amador e os centros esportivos. Nele, será possível realizar uma gestão automatizada de processos que hoje são realizados de forma manual na grande maioria dos centros esportivos de pequeno e médio porte. Entre os processos chaves do sistema, podemos destacar o cadastro quadras e horários de funcionamento, busca e reserva de horários, pagamento por boleto ou cartão, assim como a avaliação de quadras. 

 Desta forma, a finalidade do sistema será auxiliar o gestor de quadra na administração de sua agenda de reservas e horários, bem como na administração financeira e divulgação de seu estabelecimento. Para os usuários da plataforma será possível realizar uma reserva em qualquer quadra em sua região, realizar o pagamento online através de boleto ou cartão de crédito, além de poder contar com o sistema de avaliações. Tudo isso de forma prática, ágil e simples.

    1.1 Contextualização

Atualmente, com mais de 4 mil campos disponíveis em todo território nacional, o Brasil, segundo a Confederação Brasileira de Futebol 7 Society, possui mais de 30 mil atletas registrados e 12 milhões de adeptos ao futebol Society. Dado o potencial deste universo, coloca-se a necessidade de tecnologias que visam auxiliar todo o contexto envolvido em uma partida de futebol, seja ela profissional ou amadora. Neste contexto, o FutManager coloca-se como uma plataforma online que visa facilitar pequenos e médios centros esportivos que necessitam de ferramentas para automatizar seus processos, bem como auxiliar os jogadores de futebol amadores que gostaria de realizar uma reserva em uma quadra de maneira simples e online.

O FutManager é um software que visa realizar a ponte entre jogadores de futebol, amadores, e os centros esportivos que possuem quadras de futebol. Hoje, o fluxo normal de quem deseja encontrar uma quadra disponível em sua região passa por realizar uma pesquisa por centros esportivos em sua região na internet, entrar em contato, realizar o levantamento de preço, conferir os dias e horários disponíveis, para ai sim realizar a alocação da quadra. Da perspectiva do centro esportivo, a divulgação de suas quadras e promoções, gerenciar o quadro de horários, as abstenções de ultima hora, passam a se tornar um ofensor.

    1.3 Objetivo geral

Da perspectiva de um centro esportivo, o FutManager visa facilitar a gestão financeira, gestão de reservas, bem como auxiliar na divulgação do estabelecimento. Isto tornará o modelo de negócio informal em um modelo mais rentável, escalável e sustentável.

Para os jogadores de futebol, referenciados como usuários até aqui, os mesmos poderão encontrar, através de um poderoso filtro, as quadras que possuem horários disponíveis em sua região, no dia e horário desejado. Para auxiliar na decisão de qual centro esportivo escolher, os usuários poderão visualizar a média de avaliação de uma quadra. Além disso, os usuários poderão realizar o pagar dentro da própria plataforma, bem como avaliar sua experiencia com o centro esportivo.

        1.3.1 Objetivos específicos

- Auxiliar na divulgação de pequenos e médios centros esportivos.

- Melhorar a visualização de horários disponíveis.

- Facilitar o agendamento de reservas.

- Melhorar o sistema de cobrança e pagamentos.

- Implementar sistema de avaliações.

```
1.4 Justificativas
```

- A maioria das empresas de locação de quadras não tem um processo bem definido, o que abre margem para vários furos no modelo de negócio.

- A digitalização do processo de aluguel de quadras aumentará a produtividade e facilitará o processo para os clientes.

- A digitalização ajudará na divulgação de muitas quadras que não tem um marketing envolvido no negócio.

## 2. Participantes do processo

    2.1 PERSONA 1

 Fábio tem 41 anos, é casado e atualmente trabalha como dono/gestor de quadras de futebol na região onde vive. Sua personalidade é de uma pessoa brincalhona e bem humorada, é também um ótimo empreendedor. Seu sonho atualmente é conhecer o mundo e poder melhorar e ampliar seus negócios. Porém, um problema que Fábio enfrenta atualmente é a falta de organização em sua quadra. Fábio se utiliza de uma agenda para se organizar mas, mesmo assim, não foram raras as vezes que ele acabou reservando um mesmo horário para mais de uma pessoa. O sistema de gestão de quadras sanará este e outros problemas. Com o sistema, Fábio poderá ter controle total em sua agenda, sabendo quais horários estão disponíveis, pré-reservados ou reservados. Ele também não precisará mais se preocupar com confirmação de presença ou com a divulgação de sua quadra.

    2.2 PERSONA 2

Paulo tem 25 anos é solteiro e estudante, ele adora se reunir com os amigos nos finais de semana para jogar futebol. Entre os amigos, Paulo é o responsável por organizar as partidas e o churrasco ao final de cada partida, mas ele sempre encontra dificuldade em encontrar uma quadra que tenha disponível o horário em que ele, e seus amigos, possam se reunir para jogar. Além disso, durante a manhã em que o jogo ocorrerá, Paulo perde boa parte de seu tempo confirmando se todos os seus amigos poderão comparecer. Com o sistema de gestão de quadras Paulo não terá mas estes problemas. Ao utilizá-lo, ele poderá facilmente encontrar quais quadras possuem o horário que ele e seus amigos desejam, podendo facilmente realizar uma pré-reserva ou até mesmo cancelá-la. O sistema também automatizará o processo de confirmação de presença, assim Paulo poderá ter mas tempo para preparar o churrasco.

## 3. Modelagem do processo de negócio

## 3.1. Análise da situação atual

No momento atual que vivemos o futebol 7 ou chamado Society está em crescimento atual por ser tratar de uma lazer entre crianças, jovens e até adultos como também da grande existência de quadras ao decorrer de todo território. Através desse grande fluxo de atletas e quadras citadas, encontra-se o problema tanto de jogadores para marcação de seus horários quanto dos gestores de quadras que muitas das vezes trabalham sozinhos para a administração deste grande volume. O processo normalmente ocorre de forma manual. 

* O cliente precisa entrar em contato presencialmente (maioria das vezes) ou por telefone para realizar a marcação de horários;
* Logo após o contato o dono da quadra precisa conferir em seu caderno de anotações a existencia de um novo horário (que sendo manuel pode ocorrer de esquecer da marcação ou a duplicidade de horários)
* A cobrança feita de "boca a boca", com confunsões em pagamentos e cobrança indevida, sem uma gerencia de pagamentos por parte de cada "jogador"
* Pagamento somente em dinheiro e cartão, com ausencia de pagamento online e agendamento de pagamento caso cliente esqueça o cartão ou não tenha pagamento naquele determinado dia. 

Pode-se citar para resolução desses problemas a criação do Fut Manager que venha unificar todos os processos do negócio. Entre eles podemos citar cadastro e atendimento ao cliente; cadastro de quadra; agenda de horários disponíveis e reservas destes; cobrança e pagamentos.

* Através do cadastro de clientes o gestor de quadras pode ter seus dados para poder realizar um melhor atendimento ao clientes, pode-se saber as melhores possibilidades de horários para atendimento deste, ligações de feedbacks, programas de fidelidade e entre outras. 

* O gestor da quadra irá ter a possibilidade do cadastramento de várias quadras em seu próprio site para administração destas, possibilita-se assim ao cliente ver as quadras mais próximas da sua região e perceber a estrutura desta visa-se o atendimento as suas demandas esportivas. 

* Agenda de horários irá facilitar para a locação de clientes em diferentes horários, que facilita ao precisar de entrar em contato presencialmente com o dono da quadra. Junto a este, é disponibilizado um quadro de horários, que o usuário tem possibilidade de agendar o horário e dia dia disponível para sua demanda e em caso de duplicidade de horários o não aceitamento do sistema (uma administração de horário para o gestor da quadra). 

* Já a questão de pagamentos e cobrancas será responsável pelo gerenciamento das vendas, como se fosse uma loja virtual, um ambiente que troca a dificuldade de pagamento presencial por uma forma online que oferece praticidade e segurança aos clientes.

## 3.2. Descrição Geral da proposta

A proposta da FutManager é criar uma plataforma capaz de facilitar o processo de uma reserva de quadra de futebol. Para isso, a plataforma contemplará poucas funcionalidades, mas que todas elas sejam essenciais para torna a experiçência de usuário mais simples, conveniente e intuitiva. 

Sendo assim, da pespectiva de quem deseja alugar uma quadra, a plataforma permitirá que o processo de reserva seja totalmente online. Nele, o usuário será capaz de encontrar quais quadras e horários estão disponiveis em um determinado dia e região, realizar o pagamento e confirmar a presença de quais de seus amigos irão comparecer.

A plataforma também permitírá que o gestor de uma quadra possa ter a sua agenda de reserva de horário e controle financeiro automatizados, além de dar visibilidade de sua quadra a toda a base de usuários da FutManager.

Ao colocar em pespectiva um futuro breve, dentre as oportunidades de melhorias, a plataforma poderá: 

* Integraçoes com os pricipais sistemas ERPs que, por ventura, o gestor de quadras já utilize. 

* adicionae sistema de valiação da estrutura da quadra para auxiliar o usuário a escolher a melhor opção. 

* Pagamento por visibilidade, onde o gestor de uma quadra poderá pagar para ganhar mais destaque dentro do sistema de busca. 

* Sistema de cupons e fidelização.
  
  ## 3.3. Processos

### 3.3.1 Processo 1 – Cadastro Cliente e Gestor

Processo de cadastro de cliente levará em conta o cliente ao entrar no site, tendo interesse por este, para realizar o cadastro o cliente/gestor enviará seus dados para o sistema, ao recebe-los o sistema passará por uma etapa de validação feito pelo próprio, caso seja aprovada o sistema cadastrará o usuário/gestor e irá adiciona-lo no banco, caso contrário ele é direcionado ao envio novamente dos dados.

![Processo de cadastro do usuário no sistema](imagens/processoCadastro.jpg "Modelo BPMN do Processo de Cadastro do usuário no sistema.")

### 3.3.2 Processo 2 – Login

Após o processo de cadastro de usuário, temos o login do usuário no sistema. O processo irá validar se o usuário foi criado corretamente a partir deste cadastrado no banco e realizará o final do processo, assim, entra-se no sistema.

![Processo de login no sistema](imagens/ModeloLogin.png "Modelo BPMN do Processo de Cadastro de Quadras no sistema.")

### 3.3.3 Processo 3 – Cadastro de Quadras

No processo de cadastro de Quadras, o cliente inicialmente envia os dados da quadra, para ser realizado o cadastro. Depois de passar pela validação, os dados são enviados ao banco. Após completar o cadastro, é exibida uma janela de escolhas, onde é perguntado, se ele deseja continuar e cadastrar mais quadras, ou finalizar.

![Processo de cadastro de Quadras no sistema](imagens/modeloCadastroQuadras.jpg "Modelo BPMN do Processo de Cadastro de Quadras no sistema.")

### 3.3.4 Processo 4 – Reserva de Horários

O processo permitirá ao usuário encontrar quais horários então disponíveis em uma quadra. Nele, o usuário, caso tenha interesse por algum dos horários disponíveis, deverá realizar a pré-reserva. A pré-reserva consiste em uma taxa que deverá ser paga em até um dia e, somente após a confirmação do pagamento, será efetivada a reserva de horário. Uma vez paga a taxa, o valor não poderá ser reavido pelo usuário.

![Processo de reserva](imagens/reserva-de-horario.jpg "Modelo BPMN do Processo de Reserva de Horários.")

### 3.3.5 Processo 5 – Pagamento

O Processo permitirá ao usuário escolher o tipo de pagamento, entre pré e pós. Para ambos os tipos de pagamento haverão duas formas, sendo elas através de cartão ou boleto. Após a confirmação do pagamento no método pré, será necessário levar o comprovante no dia da realização do evento. No pagamento pós, o usuário pagará no local após a realização do evento.

![Processo de Pagamento](imagens/paymentProcessv2.png "Modelo BPMN do Processo de Pagamento.")

### 3.3.6 Processo 6 – Avaliação do serviço

Após a realização de uma reserva, o usuário será questionado se deseja avaliar o serviço utilizado. Através do feedback dos usuários será possível otimizar e refinar o processo de negócio. Os feedbacks serão armazenados em banco e utilizados em dashboards.

![Processo de Pagamento](imagens/rating-process.png "Modelo BPMN do Processo de Avaliação do serviço.")

## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 – Cadastro de Cliente e Gestor

**Informação sobre o Cadastro de Cliente/Gestor**

 Será a página inicial do processo, que após o usúario do sistema se interessar por este, tem a oção de realizar seu cadastro para otimizar seu lazer. Dentro do cadastro o usuário tera a opção de selecionar se será um cliente (jogador) ou um gestor (dono/administrador de quadra), é requerido também as informações básicas do usuário, como nome e dados de contato, validação usuário real ou repitido a partir do CPF, criação de senha e opções de colocar foto de perfil e escrever um pequeno texto sobre o motívo do cadastro e a inspiração deste.

| **Campo**                    | **Tipo**       | **Restrições**                                                                 | **Valor default** |
| ---------------------------- | -------------- | ------------------------------------------------------------------------------ | ----------------- |
| Nome                         | Caixa de texto | Preenchimento obrigatório; Bloqueio caracteres especiais                       |                   |
| Sobreenome                   | Caixa de texto | Preenchimento obrigatório; Bloqueio caracteres especiais                       |                   |
| CPF                          | Número         | Preenchimento Obrigatório, mínimo de 11 caractesres                            |                   |
| Data nascimento              | Caixa de Texto | Preenchimento obrigatório, formato data                                        |                   |
| Sexo                         | Seleção Única  | Uma opção deve ser preenchida                                                  |                   |
| Celular para Contato         | Número         | Preenchimento obrigatório, formatação de Telefone                              |                   |
| CEP                          | Número         | Preenchimento Obrigatório                                                      |                   |
| Logradouro                   | Caixa de Texto | Preenchimento à partir da entrada do CEP                                       |                   |
| Número                       | Caixa de Texto | Preenchimento obrigatório                                                      |                   |
| Complemento                  | Caixa de Texto | Preenchimento opcional                                                         |                   |
| Bairro                       | Caixa de Texto | Preenchimento à partir da entrada do CEP                                       |                   |
| Cidade                       | Caixa de Texto | Preenchimento à partir da entrada do CEP                                       |                   |
| Estado                       | Seleção Única  | Preenchimento à partir da entrada do CEP                                       |                   |
| Ponto de referência          | Caixa de Texto | Preenchimento opcional                                                         |                   |
| E-mail                       | Caixa de texto | Formato e-mail                                                                 |                   |
| Senha                        | Caixa de Texto | Mínimo 8 caracteres; Senha forte: Conter caracteres especiais e conter números |                   |
| Confirmar senha              | Caixa de Texto | Valor do campo ser igual ao da senha                                           |                   |
| Escolha de Cliente ou Gestor | Seleção Única  | Uma opção deve ser preenchida                                                  |                   |

#### Processo 2 – Login

**Informação sobre o Cadastro das Quadras**

Após o processo de cadastro de usuário, temos o login do usuário no sistema. O processo irá validar se o usuário foi criado corretamente a partir deste cadastrado no banco e realizará o final do processo, assim, entra-se no sistema.

| **Campo**                    | **Tipo**       | **Restrições**      | **Valor default** |
| ---------------------------- | -------------- | ------------------- | ----------------- |
| Endereço e-mail              | Caixa de Texto | Cadastrado no banco | ----------------- |
| Senha                        | Caixa de Texto | Cadastrado no banco | ----------------- |
| Escolha de Cliente ou Gestor | Seleção Únicao | Cadastrado no banco | ----------------- |

#### Processo 3 – Cadastro de Quadras

**Informação sobre o Cadastro das Quadras**

 Após o cadastro do Gestor, ou dentro do sistema na parte específica de cadastro de quadras, é possivel realizar o cadastro das quadras. Nesse cadastro, é requerido as informações básicas, como localidade da quadra, horário de funcionamento, informações para contato e até mesmo fotos (opcinal).  

| **Campo**                 | **Tipo**       | **Restrições**                                  | **Valor default** |
| ------------------------- | -------------- | ----------------------------------------------- | ----------------- |
| Rasão Social              | Caixa de Texto | Preenchimento Obrigatório                       |                   |
| Nome Fantasia             | Caixa de Texto | Preenchimento Obrigatório                       |                   |
| CNPJ                      | Número         | Preenchimento Obrigatório, mínimo 14 carácteres |                   |
| Telefone                  | Número         | Preenchimento Opcional, formatação de Telefone  |                   |
| Observações               | Caixa de Texto | Preenchimento Opcional                          |                   |
| CEP                       | Número         | Preenchimento Obrigatório                       |                   |
| Logradouro                | Caixa de Texto | Preenchimento feito à partir da entrada do CEP  |                   |
| Número                    | Número         | Preenchimento feito à partir da entrada do CEP  |                   |
| Complemento               | Caixa de Texto | Preenchimento Opcional                          |                   |
| Bairro                    | Caixa de Texto | Preenchimento feito à partir da entrada do CEP  |                   |
| Cidade                    | Caixa de Texto | Preenchimento feito à partir da entrada do CEP  |                   |
| Estado                    | Seleção Única  | Preenchimento feito à partir da entrada do CEP  |                   |
| Horário Comercial Inicial | Caixa de Texto | Obrigatório, padrão do horário 00:00            |                   |
| Horário Comercial Final   | Caixa de Texto | Obrigatório, padrão do horário 00:00            |                   |
| Ponto de referencia       | Caixa de texto | Preenchimento Opcional                          |                   |
| Adcionar imagens          | Imagens        | Preenchimento Opcional                          |                   |

#### Processo 4 – Reserva de Horários

**Solicita horários disponíveis**

 A plataforma retornará ao usuário um formulário. O mesmo deverá informar qual o período de datas e cidade deseja consultar por horários. Opcionalmente, o usuário também poderá especificar por quais quadras deseja consultar. 

| **Campo**    | **Tipo**         | **Restrições**                             | **Valor default**   |
| ------------ | ---------------- | ------------------------------------------ | ------------------- |
| Data inicial | Data             | Obrigatório e maior ou igual a data atual  | Data atual          |
| Data final   | Data             | Obrigatório, maior ou igual a data inicial | Data atual          |
| Estado       | Seleção única    | Obrigatório                                | Dropdown vazio      |
| Cidade       | Seleção única    | Obrigatório                                | Dropdown vazio      |
| Quadra       | Múltipla escolha | Não obrigatório                            | Checkbox desmarcado |

**Informa o horário desejado**

 Para o filtro informado pelo usuário, a plataforma deverá retornar, caso haja, a relação de todos os horários disponíveis. A relação será uma tabela composta pelo nome e endereço da quadra, data e horário. Nesta tabela o usuário deverá marca por qual horário deseja realizar a pré-reserva.

| **Campo** | **Tipo**         | **Restrições**                    | **Valor default**   |
| --------- | ---------------- | --------------------------------- | ------------------- |
| Horário   | Múltipla escolha | Obrigatório seleção de um ou mais | Checkbox desmarcado |
|           |                  |                                   |                     |

#### Processo 5 – Fluxo de Pagamento

**Preencher informações de contato**

Será fornecido um formulário para o usuário preencher os dados do cartão que será utilizado caso opte pelo tipo de pagamento pós. Os dados informados pelo usuário serão utilizados para pagamentos futuros. O formulário conterá os campos necessários para serem enviados ao gateway de pagamento.

| **Campo**         | **Tipo**       | **Restrições**              | **Valor default** |
| ----------------- | -------------- | --------------------------- | ----------------- |
| Numero do Cartão  | Caixa de texto | Somente números             | Vazio             |
| Validade          | Caixa de texto | Somente números             | Vazio             |
| CVV               | Caixa de texto | Somente números             | Vazio             |
| Nome do Titlar    | Caixa de texto | Caracteres de texto somente | Vazio             |
| Apelido do cartão | Caixa de texto | Opcional                    | Vazio             |
| CPF/CNPJ titular  | Caixa de texto | Somente números             | Vazio             |

#### Processo 6 – Fluxo de Avaliação

**Perguntas de avaliação**

Após a efetuação da reserva o usuário receberá um alerta com a opção de avaliar o serviço obtido. O fluxo consiste em perguntas sobre recomendação, um NPS sobre o serviço e uma caixa de texto de observação.

| **Campo**               | **Tipo**       | **Restrições**           | **Valor default** |
| ----------------------- | -------------- | ------------------------ | ----------------- |
| Seleção de recomendação | Select         | Sim ou Não               | Sim               |
| NPS do serviço          | Select         | Range de zero a dez      | 10                |
| Campo de Observação     | Caixa de texto | Máximo de 200 caracteres | Sim               |

### 4.2. Tecnologias

Nosso software se caracteriza sendo um sistema-web, em que as linguagens ultilizadas para para criação do front (parte visível pelos usuários) será HTML para linguagem de marcação, CSS editor de visualização no front e também consta a utilização do Bootstrap para auxiliar na responsividade do site. Para o back-end, assunto em discussão está em aberto, em que a linguagem que mais chama a atenção de todos integrantes do grupo é JavaScript. Dentre isso, para finalizar foi discutido a utilização MySQL 

## 5. Modelagem de dados

Apresente o modelo de dados. Defina o dicionário de dados com os respectivos formatos e significados.

### 5.1. Diagrama de Entidade-Relacionamento

Diagrama de Entidade-Relacionamento (DER) criado a partir do detalhamento de atividades

![Diagrama de Entidade Relacionamento de Exemplo](imagens/diagrama-der-v3.png "Diagrama de Entidade Relacionamento de Exemplo")

## 6. Indicadores de desempenho

Usar o seguinte modelo:

| **Indicador**                       | **Objetivos**                                                                                                               | **Descrição**                                                                                                                      | **Cálculo**                                               | **Fonte dados**         | **Perspectiva**                             |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | ----------------------- | ------------------------------------------- |
| Indicador de avaliação de quadra    | Avaliar a média de satisfação de uma determinada quadra, para visualiação se espectativas de clientes estão sendo atendidas | Mede a quantidade de "estrelas" que um usuário avaliou nas reservas que estão associadas a uma quadra de acordo com seus critérios | Quant estrelas (avaliação select) / (quant avaliação * 5) | Tabela Reserva          | Melhora em processos e crescimento          |
| Indicador de avaliação do sistema   | Avaliar a média de satisfação do sistema, para visualiação se espectativas de clientes estão sendo atendidas                | Mede a quantidade de "estrelas" que um usuário avaliou de acordo com seus critérios                                                | Quant estrelas (avaliação select) / (quant avaliação * 5) | Tabela AvaliaçãoSistema | Processos internos                          |
| Indicador de acesso ao sistema      | Vizualizar a quantidade de acessos ao sistema por cada mês, para perceber o crescimento do público ao sistema               | Gerar um relatório de quantos acessos ao sistema ocorreu, mede um número de acordo com o mês                                       |                                                           | Tabela Log              | Processos internos                          |
| Indicador de quantidade de reservas | Vizualizar a quantidade de reservas por cada mês, para perceber o crescimento do público daquela determinada quadra         | Gerar um relatório de quantos marcações de reserva ocorreu em cada mês por cada gestor                                             |                                                           | Tabela Reservas         | Processos que auxiliam os usuários (gestor) |
| Indicador de receita                | Mede a receita que recebe a cada mês através de marcações                                                                   | Quando a quadra está tendo de receita para auxilio do gestor em seus gastos e mudanças na quadrca                                  |                                                           | Tabela Receita          | Processos que auxiliam os usuários (gestor) |

## 7.Sistema desenvolvido

* Primeiramente temos em nosso projeto, umas das telas mais importantes em questões de marketing, a famosa tela de propaganda. Nela se encontra toda proposta que nos os desenvolvedores, elaboramos para atender a demandas dos clientes e gestores de quadras, tanto para agilizar quanto para facilitar processos, que em questão são apresentadas aos donos de quadra quem veem a importância deste sistema para o seu negócio e aos clientes melhorando ao seu lazer.

**TELA CADASTRO**
* Após o interesse do dono da quadra  (gestor) ou ao usuário de uma quadra (cliente/jogador) ao sistema, a primeira tela do processo é a tela de cadastro do gestor ou usuário, tendo a opção de escolha de acordo com suas necessidades do sistema. Além da definição do tipo de usuário a o cadastro de seus dados pessoais, como nome e dados de contato, validação usuário real ou repetido a partir do CPF, criação de senha seu e-mail e senha que a partir disto serão guardadas em um banco para o auxilio em outras etapas.

**TELA LOGIN**
* Com o cadastro realizado, o próximo passo é o fator principal para a entrada no sistema, a tela de login do usuário no sistema. A partir de dados armazenados no banco, como o e-mail, senha e tipo do usuário será validado está informação digitada com informações do banco e com tudo correto o correrá o login, que através deste, terá o encaminhamento para sua devida tela, a de cliente(jogador) ou de gestor(administrador da quadra)

**TELA CLIENTE**
* Com usuário "logado" e na tela de cliente, terão as opções:
    - Busca de quadras mais próximas a sua região ou de seu interesse para lazer a partir de um mapa na tela inicial. 
    - A parte de reservas, em que existe a opção tanto de realizar sua reservas quanto visualizar reservas já existentes.
    - Fale conosco, um campo para realizar uma dúvida sobre a usabilidade do sistema.
  
**TELA RESERVA**
* A partir da seleção de estado e cidade, horário de início e final da busca e variação da data clicar no botão buscar para aparecer os horários disponíveis e as devidas quadras com suas respectivas avaliações, horários e data. Selecionando um quadra para pré-reserva irá ser direcionada para lista de quadras agendas, tendo a possibilidade de pagar as quadras com pagamentos pendentes (mostram a situação necessária para prosseguimento do agendamento)

**TELA DE PAGAMENTO**
* A tela onde será realizada o pagamento através da escolha em de cartão de crédito ou de boleto, em que já é criado a partir dados do cliente salvo no banco. Após o pagamento do boleto, a tele conta com um campo que permite o anexo do comprovante de pagamento, para assim a liberação da quadra para o lazer.

**TELA DE AVALIAÇÃO**
* Após a realização do lazer, da data do respectivo jogo, na lista de reservas irá ficar disponível a quadra para a avaliação, que a partir desta pode alterar a média da nota da quadra disponível no buscar quadras. Está avaliação é composta da quantidade de estrelas (contadas de 1 a 5) para a respectiva quadra e um campo para deixar um comentário do porque / o motivo daquela avaliação.

**TELA GESTOR**
* Com usuário "logado" e na tela de gestor, terão as opções:
  - Visualização do seu perfil
  - Quadras: Tanto para o cadastro de quadras e visualização destas já cadastradas.
  - Financeiro, para visualizar a receita da empresa, gráfico de indicador

**TELA CADASTRO QUADRA**
* Com o gestor já cadastrado no sistema, ele tem a possibilidade de adicionar várias quadras que ele administra, pode-se assim visualizar o faturamento de cada quadra e esta será adicionada no banco para usuários reservar a jogar nesta e demais processos. Este cadastro é feito a partir do preenchimento de campos com dados como endereço, razão social, CNPJ e entre outras, após isso adicionada no banco.

## 8. Avaliação

Considerando que a plataforma FutManager nasceu com a proposta de unicamente atender os critérios de avaliação da disciplina de Trabalho Interdisciplinar II, dos cursos de Engenharia de Software e Sistemas da Informação, podemos concluir que a mesma 
superou as expectativas. Porém, em um contexto de mercado real, é possível identificar que a plataforma FutManager ainda precisa de polimento para se tornar um MVP. Para tal, precisaríamos, por exemplo, de rescrever para o frontend e backend utilizando algum framework consolidado e escalável, trabalhar em parceria com algum stakerholder para compreender e evoluirmos ainda mais na modelagem dos processos.

## 9. Conclusão

Este trabalho foi desenvolvido com o intuito de facilitar a relação entre clientes e gestores de uma quadra de futebol Socity, em outras palavras, reuni peladeiros e donos de quadras, facilitando através da automatização de processos que visam melhorar tanto a gestão quanto ao lazer de um cliente, maximizar o tempo de espera e melhorando a segurança do estabelecimento no que diz respeito a pagamento e ao local.

Percebe-se em conjunto ao grupo que apesar das dificuldades de conciliação com outras matérias em conjunto a que envolvem esta, para realização do trabalho, este atendeu e foi possível colocar em prática a maior parte do conteúdo aprendido, como o funcionamento de uma empresa de criação de sistemas (pela plataforma gerenciamento do GitHub), a criação de banco de dados para alocação de informações necessárias no sistema, as devidas modelagens de processos que são parte fundamental do funcionamento e a continuação do aprendizado da linguagem Web de back-end e front-end.

Através de conversas sobre avaliação do sistema, constatamos que a maioria dos objetivos de um gerenciador de quadras foram atendidas, que atividades manuais como, controle de valor, visualização de quadras da sua região, reserva de horários e pagamento acabaram se transformando em atividades que você pode fazer no conforto do seu lar e agilizam suas tarefas, ocasionando em mais mais conforto e facilidade antes do seu lazer (jogadores/clientes) e ajudando a gestores a estar cada vez mais próximo do que passa no seu estabelecimento.

Dentre os objetivos definidos, as ideias que não foram inclusas nesse momento, que buscam ser implementadas em um futuro próximo são:

* Adaptação do sistema em dispositivos moveis, criação de aplicativo mobile, pelo fato do do site já ser responsivo para adaptação web a estes dispositivos.
* Busca de novas implementações de quadras ao redor do Brasil, para maiores opções e crescimento no mercado
* Chat de conversas entre gestores e clientes, melhorando cada vez mais a comunicação e relacionamento entre eles.
* Pagamento por cartão de crédito ser desenvolvido por completo, através de API que visam ter contato com emissoras de cartão para cobrança
* Implementação do comercio varejo da quadra, o qual o gestor faz vendas para cliente por um meio virtual para facilitar pagamento e até mesmo o controle de estoque 

# REFERÊNCIAS

Como um projeto de software não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT.

Verifique no link abaixo como devem ser as referências no padrão ABNT:

http://www.pucminas.br/imagedb/documento/DOC\_DSC\_NOME\_ARQUI20160217102425.pdf

**[1.1]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[1.2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[1.3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._

# APÊNDICES

**Colocar link:**

Do código;
https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2021-1-ti2-0940100-samuelmateusoctaviopedrothiago/tree/master/codigo
Dos artefatos;
https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2021-1-ti2-0940100-samuelmateusoctaviopedrothiago/tree/master/artefatos
Da apresentação final;
https://docs.google.com/presentation/d/17ZnaxPpPDNcSWQzhB1HOUiMCbC-Ms6tWClFZsrN6lUQ/edit?usp=sharing

Do vídeo de apresentação
https://youtu.be/yp_xKTMbQX8
