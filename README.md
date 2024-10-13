# Sistema de Gerenciamento de Tarefas em Tempo Real

Este projeto é um sistema de gerenciamento de tarefas desenvolvido com **TypeScript**, com foco em edição colaborativa de arquivos em tempo real. O sistema permite a criação de pastas e arquivos, e quando duas ou mais pessoas estão editando o mesmo arquivo, as alterações são refletidas instantaneamente para todos os participantes. Além disso, os usuários podem visualizar em tempo real quem está editando cada parte do documento.

## Funcionalidades

- **Edição em tempo real**: várias pessoas podem editar o mesmo arquivo simultaneamente, com atualizações em tempo real.
- **Indicação de editores ativos**: o sistema exibe em tempo real o nome dos usuários que estão editando um arquivo, destacando suas ações diretamente no documento.

## Tecnologias Utilizadas

- **Node.js**: Servidor backend para lidar com as conexões e a lógica da aplicação.
- **TypeScript**: Linguagem utilizada para o desenvolvimento, aproveitando seu sistema de tipos.
- **Socket.IO**: Biblioteca para facilitar a comunicação em tempo real entre os usuários e o servidor.
- **Express**: Framework web usado para gerenciar as rotas e a estrutura do servidor.

## Como rodar o projeto

1. **Instalação das dependências**: 
   Execute o comando abaixo para instalar as dependências do projeto:

   ```bash
   npm install
   ```

2. **Configuração do TypeScript**:
   O TypeScript já está configurado no projeto. O arquivo `tsconfig.json` foi inicializado com o comando:

   ```bash
   npx tsc --init
   ```

3. **Rodando o projeto**:
   Para rodar o projeto em ambiente de desenvolvimento, execute o comando:

   ```bash
   npm run dev
   ```

## Requisitos

Para a parte inicial do projeto, focamos na funcionalidade de edição em tempo real de arquivos. Portanto, este **README** cobre apenas essa parte.

As dependências necessárias são:

- **Express**: Para configurar o servidor HTTP.
- **Socket.IO**: Para facilitar a comunicação em tempo real entre os clientes e o servidor.
- **TypeScript** e ferramentas relacionadas para desenvolvimento:

   - `typescript`
   - `ts-node`
   - `nodemon`
   - `@types/node`
   - `@types/express`
   - `@types/socket.io`

Os pacotes podem ser instalados com os seguintes comandos:

   ```bash
   npm init -y
   npm install express socket.io
   npm install typescript ts-node nodemon @types/node @types/express @types/socket.io --save-dev
   ```



