<h1>Dental Clinic API</h1> 

<p align="center">
  <img src="http://img.shields.io/static/v1?label=STATUS&message=EM%20DESENVOLVIMENTO&color=RED&style=for-the-badge"/>
</p>


### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)

:small_blue_diamond: [Como rodar os teste](#testes)
<!-- :small_blue_diamond: [Como rodar os teste](#como-rodar-os-testes) -->

:small_blue_diamond: [Dependências e Libs](#linguagens-dependências-e-libs-utilizadas-books)

:small_blue_diamond: [Licença](#licença)


## Descrição do projeto 

<p align="justify">
  Esta é uma API para clínica odontológica onde é possível cadastrar pacientes, serviços, usuários e efetuar vendas gerando contas a receber, 
  onde ainda pode gerar a lista de contas a receber por período e também as contas já recebidas.
</p>
<p>Efetuei o desenvolvimento deste projeto buscando ao máximo atender as boas práticas de desenvolvimento de software, para poder me 
  aperfeiçoar sobre este vasto conhecimento.
</p>
<p>O que mais me encantou foi conseguir utilizar bastante generics para diminuir repetições desnecessárias de código, tentando sempre seguir os 
  conhecimentos que tenho adquirido sobre SOLID.
</p>


## Funcionalidades

:heavy_check_mark: Cadastrar, listar, atualizar e deletar <strong>usuários</strong>.  

:heavy_check_mark: Autenticação de <strong>usuários</strong>.

:heavy_check_mark: Cadastrar, listar, atualizar e deletar <strong>pacientes</strong>.  

:heavy_check_mark: Cadastrar, listar, atualizar e deletar <strong>serviços</strong>.

:heavy_check_mark: Criar, listar, atualizar e deletar <strong>vendas</strong>.

:heavy_check_mark: Gerar contas a receber à partir de uma venda.

:heavy_check_mark: Receber uma conta.

:heavy_check_mark: Listar contas a receber por período.

:heavy_check_mark: Listar contas recebidas por período.


## Deploy da Aplicação :dash:

> A API pode ser carregada a partir da seguinte URL: https://dental-clinic-bk.herokuapp.com/users


## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)
:warning: [Git](https://git-scm.com/downloads)
:warning: [Docker](https://docs.docker.com/get-docker/)
:warning: [Docker-Compose](https://docs.docker.com/compose/install/) 


## Como rodar a aplicação :arrow_forward:

#### No terminal:
Clone o projeto: 

```
git clone https://github.com/orlandodantas/dental-clinic.git
```
Entre na pasta do projeto: 

```
cd dental-clinic
```

Instale as dependências: 

```sh
npm install
```

Levante o container com o banco de dados PostegreSQL: 

```sh
npm run compose:up
```
Renomei o arquivo .env.example para .env:
> Unix
```sh
mv .env.example .env
```
> Windows
```sh
rename .env.example .env
```

Criação do banco de dados:

```sh
npx prisma migrate dev
```

Rodar a aplicação:

```sh
npm run dev
```

> Agora a aplicação está pronta para ser usada em um cliente rest por exemplo o [Insomnia](https://insomnia.rest/download).


## Testes
> Em breve teremos cobertura de testes, aguardem...

<!-- ## Como rodar os testes

#### Em um terminal:
Rodar a execução dos testes:

```sh
npm test
```

Rodar a execução do teste coverage:

```sh
npm run test:coverage
``` -->


## Documentação da API
> Em breve teremos a documentação da API feita com <strong>SWAGGER</strong>, mas até lá você poderá fazer testes em nossa API utilizando
> nosso template para o [Insomnia](https://insomnia.rest/download): [insomnia-template-dental-clinic.json](insomnia-template-dental-clinic.json) que se encontra na pasta raiz.
> Se quiser aprender um pouco mais sobre como utilizar o insomnia você pode ver [Aqui](https://youtu.be/3tB0uDliS6Y).


## Linguagens, dependências e libs utilizadas :books:

- [Node](https://nodejs.org/en/download/)
- [Prisma](https://www.prisma.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Express Async Errors](https://www.npmjs.com/package/express-async-errors)
- [Http Status Codes](https://www.npmjs.com/package/http-status-codes)
- [Restify Errors](https://www.npmjs.com/package/restify-errors)
- [Joi](https://www.npmjs.com/package/joi)
- [Json Web Token](https://www.npmjs.com/package/jsonwebtoken)
- [BCrypt Js](https://www.npmjs.com/package/bcryptjs)
- [Cors](https://www.npmjs.com/package/cors)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [EsLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Licença 

The [MIT License](LICENSE) (MIT)

Copyright :copyright: 2022 - Dental Clinic API
