# bondy-desafio-fullstack

## Estrutura do repositório:
Este projeto é um monorepo construído com Lerna (para saber mais => https://lerna.js.org/)

- `backend` (API Graphql para realizar desafio de backend)
- `frontend` (Repo para criação do frontend do desafio)

```
packages/
    backend/
        src/
            ...
        package.json
        serverless.yml
    frontend/
        package.json

package.json
```
Para executar os scripts presentes nos arquivos package.json:

- `yarn lerna run` + comando (ex: `yarn lerna run test:coverage`)
- Em um projeto específico `yarn lerna run start --scope=backend`, o scope é o name que está no package.json
- Também é possível executar os comandos normalmente entrando na pasta especifica do projeto.

## O que deve ser feito

### Backend:
Utilizar a estrutura existente para criar uma mutation para realização de um login, a mesma deve receber email e senha e fazer verificação no banco se as informações estão corretas:
- O projeto está configurado com Node 18, dar yarn na raiz para baixar dependências.
- O projeto já está configurado apontado para o banco MongoDB de testes;
- As configurações do banco estão no arquivo src/memoryDB/connection.ts
- Já existe um usuário cadastrado com o email desafio@bondy.com.br e senha 123456, que está salva encriptado utilizando a lib bcrypt;
- Essa mutation de login deve retornar todas as informações salvas na model User;
- Ao rodar o projeto com `yarn start` será apresentado no console a url para o Playground para testes de graphql;

### Frontend:
Criar um projeto frontend dentro da pasta packages/frontend:
- O projeto deve se conectar com o backend e realizar as consultas via graphql;
- Deve conter uma pagina de login, com campo de e-mail e senha;
- Ao passar os dados corretamente o usuário deve ser direciona a uma pagina de boas-vindas;