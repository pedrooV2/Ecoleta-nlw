<h1 align="center">
    <img alt="NextLevelWeek" title="#NextLevelWeek" src="https://github.com/tgmarinho/Ecoleta/blob/master/assets/banner.png" />
</h1>

<h4 align="center"> 
	:rocket: NextLevelWeek 1.0 - Ecoleta
</h4>


## ♻️ Ecoleta

 O Ecoleta é uma forma de conectar empresas e entidades de coleta de resíduos orgânicos e inorgânicos as pessoas que precisam descartar seus resíduos de maneira ecológica.

As empresas ou entidades poderão se cadastrar na plataforma web enviando:
- Uma imagem do ponto de coleta
- Nome da entidade, email e whatsapp
- E o endereço para que ele possa aparecer no mapa
- Além de selecionar um ou mais ítens de coleta: 
  - Lâmpadas
  - Pilhas e baterias
  - Papéis e papelão
  - Resíduos eletrônicos
  - Resíduos orgânicos
  - Óleo de cozinha

Os usuários terão acesso ao aplicativo móvel, onde poderão:
- Navegar pelo mapa para ver as instituições cadastradas
- Entrar em contato com a entidade através do E-mail ou do WhatsApp

Esse projeto foi desenvolvido durante a **NLW - Next Level Week** oferecida pela [Rocketseat]().
O NLW é uma experiência online com muito conteúdo prático e desafios. Esse conteúdo fica disponível durante uma semana.


## 🎨 Layout

O layout da aplicação está disponível no Figma:

[Figma](https://www.figma.com/file/1SxgOMojOB2zYT0Mdk28lB/Ecoleta?node-id=136%3A546)


### :iphone: Mobile

<p align="center">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="https://github.com/tgmarinho/Ecoleta/blob/master/assets/home-mobile.png" width="200px">

  <img alt="NextLevelWeek" title="#NextLevelWeek" src="https://github.com/tgmarinho/Ecoleta/blob/master/assets/detalhes-mobile.svg" width="200px">
</p>

### :computer: Web

<p align="center" style="display: flex; align-items: flex-start; justify-content: center;">
  <img alt="NextLevelWeek" title="#NextLevelWeek" src="https://github.com/tgmarinho/Ecoleta/blob/master/assets/web.svg" width="400px">
</p>

## :sparkles: Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Expo][expo]
- [Node.js][nodejs]
- [React][reactjs]
- [React Native][rn]
- [TypeScript][typescript]


## 🚀 Como executar o projeto

Podemos considerar este projeto como sendo divido em três partes:
1. Back End (pasta server) 
2. Front End (pasta web)
3. Mobile (pasta mobile)

:exclamation: Tanto o Front End quanto o Mobile precisam que o Back End esteja sendo executado para funcionar.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com) 
- [Node.js][nodejs]. 
Além disto é bom ter um editor para trabalhar com o código como 
- [VSCode][vscode]

### :dizzy: Rodando o Back End (servidor)

```bash
# Clone este repositório
$ git clone https://github.com/pedrooV2/Ecoleta-nlw

# Acesse a pasta do projeto no terminal/cmd
$ cd Ecoleta-nlw

# Vá para a pasta server
$ cd server

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev:server

# O servidor inciará na porta:3333 - acesse http://localhost:3333 
```

### :star2: Rodando a aplicação web (Front End)

```bash
# Clone este repositório
$ git clone https://github.com/pedrooV2/Ecoleta-nlw

# Acesse a pasta do projeto no seu terminal/cmd
$ cd Ecoleta-nlw

# Vá para a pasta da aplicação Front End
$ cd web

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run start

# A aplicação será aberta na porta:3000 - acesse http://localhost:3000
```

### Rodando a aplicação mobile... ainda não desenvolvida :space_invader:

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
