<h1 align="center">
    <label> Fut Manager </label>
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/oapmartins/futManager?color=red">
  
  <a href="https://github.com/oapmartins/FutManager/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/oapmartins/futManager">
  </a>
</p>

## Sobre o projeto

Fut Manager - é um software que conecta peladeiros (jogadores de futebol casual) e donos de quadras. O foco do sistema é facilitar tanto o gerenciamento de quadras e centros esportivos por parte do gestor, quanto o a marcação e visualização de horários por parte dos usuários. 

Os Gestores(donos) terão acesso as seguintes funcionalidades:
- Cadastro de Quadras
- Financeiro
- Relatório Analítico 
- Relatório Sintético

Os "peladeiros" terão acesso as seguintes funcionalidades:
- Visualiar quadras e horários disponíveis
- Realizar reservar de horários
- Visualizar reservas feitas
- Favoritar quadras
- Menu para de avaliação de quadras

Projeto desenvolvido durante a realização da disciplina de **TIS** (Trabalho Interdisciplinar) no curso de Sistemas de Informação. Puc Minas. O template utilizado como base para o projeto foi o [Skydash Template](https://www.bootstrapdash.com/product/skydash-free/).


## 💻 Sistema

Nesta parte, com um breve vídeo, é apresentado as principais funcionalidades do sistema. Ao clicar no link, é levado para o YouTube, onde o vídeo esta hospedado.

 - [FutManager](https://www.youtube.com/watch?v=8mAY8TV0vSw)





## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js][nodejs]
- [Strapi.io](https://strapi.io/)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [JQuery](https://jquery.com/)
- [Html](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [Css](https://developer.mozilla.org/pt-BR/docs/Web/CSS)


## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End (pasta server) 
2. Front End (pasta web)

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js][nodejs], [Strapi.io](https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/installation.html). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode][vscode].

Para utilizar, será necessário possuir ter um serviço do Strapi local executando o backend da aplicação na porta 3000. Para tal, será necessário:

###  Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/oapmartins/futManager

# Acesse a pasta do projeto no terminal/cmd
$ cd futManager

# Vá para a pasta server
$ cd fut-manager-strapi

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run develop

#  Após altarar a porta do strapi.io para a 3000. 
# Para acessar a base de dados, entrar em: http://localhost:3000.
```



## 📝 Licença

Ainda não decidimos uma licença para o Projeto.

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[expo]: https://expo.io/
[reactjs]: https://reactjs.org
[rn]: https://facebook.github.io/react-native/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[license]: https://opensource.org/licenses/MIT
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[prettier]: https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
[rs]: https://rocketseat.com.br
