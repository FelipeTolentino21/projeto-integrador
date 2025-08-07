# projeto-integrador
Este repositório tem como objetivo armazenar os arquivos da matéria de Projeto Integrador da universidade UniCeub. O tema/nome do projeto que está sendo desenvolvido é "**Site de certificação da monitoria do CEUB**".

Esse projeto consiste em criar um site para facilitar o processo de entrega de certificados dos minicursos/oficinas organizados e realizados pela monitoria da universidade propriamente dita.

O projeto surgiu da proposta de facilitar o envio dos certificados das oficinas da monitoria do CEUB, pois, atualmente, o processo é lento e está causando confusão entre os alunos. Por exemplo, alguns alunos não recebem os certificados mesmo após meses depois da conclusão de uma oficina. Até nós que estamos desenvolvendo o projeto já fomos afetados por este problema. A partir dessa proposta, nós modelamos estratégias para solucionar esse problema, sendo a solução o desenvolvimento de nossa aplicação.

## Parte técnica
#### Esse projeto está sendo desenvolvido com as seguintes tecnologias:
- React.js.
- Vite.
- Hmtl, CSS e JavaScript.
- Bibliotecas como Router, Axios e Cors.
- Supabase como banco de dados
#### Além dessas tecnologias, também estamos utilizando das seguintes ferramentas:
- ClickUp - Alocação de tarefas, documentação do projeto e histórias de usuários.
- Figma - Design do site
- Discord e WhatsApp - Comunicação
- Github - Versionamento do projeto

*Vale informar que o projeto está majoritariamente no Github, então seu desenvolvimento está sendo remoto, com exceções de dias em que estamos presentes nos laboratórios de informática do CEUB*

## Como rodar o projeto
#### Antes de começar, certifique-se de ter instalado:
- Node.js ou Yarn 

#### Passo a passo
1. Clone este repositório: `https://github.com/FelipeTolentino21/projeto-integrador.git`
2. Acesse a pasta: `cd certificados-monitoria`
3. Intale as dependências: `npm install`
4. Inicie o servidor de desenvolvimento: `npm run dev`
5. Abra o navegador na porta que o Vite indicar

## Objetivos iniciais
Alguns dos nossos objetivos para esse projeto consistem em:
1. Desenvolver a tela de cadastro e login ✔️
2. Desenvolver a parte de criação de turmas e conexão delas aos monitores envolvidos - Previsão: 10/09/2025
3. Desenvolver a tela de emissão de certificados (mesmo que em fase de teste) - Previsão: 10/10/2025
4. Adicionar/Alterar estrutura do banco de dados para funcionar em relação aos itens anteriores - Tarefa contínua

*Todas as datas contidas nessa secção são apenas estimativas.*

## Estrutura do Projeto
A seguir, temos a estrutura do projeto ao acessar a pasta `certificados-monitoria`.

*Essa estrutura está propensa a mudanças*
```
📦 certificados-monitoria
|- 📂src
|-  |- 📂components  // Pasta destinada a componentes do site (como botões)
|-  |- 📂pages       // Pasta destinada as diferentes páginas do site
|-  |- 📂assets      // Pasta destinada aos assets (como imagens)
|-  |- 📂routes      // Pasta destinada aos routers
|-  |- 📂services    // Pasta destinada ao serviço do banco de dados
|- 📜 .env
|- 📜 .gitignore
|- 📜 eslint.config.js
|- 📜 index.html
|- 📜 package-lock.json
|- 📜 package.json  // Contém os metadados do projeto
|- 📜 README.md     // Arquivo para organização entre os membros
|- 📜 vite.config.js
📜 README.md        // Arquivo de leitura incial do projeto
```

## Funcionalidades do projeto
A princípio, o projeto disponibilizará as seguintes funcionalidades.
- Permitir que os monitores vejam e utilizem do processo de emissão de certificado para aprovar os alunos de suas oficinas
- Permitir que os monitores cadastrem as suas turmas e às disponibilizem aos seus alunos. 

Para saber mais, acesse o [Escopo do projeto](https://docs.google.com/document/d/1RyOy5Z-JlPvY33MGmqHTKD1hUmSSMS9YT-ahRDMf9HI/edit?usp=sharing).

## Colaboradores
- Felipe Tolentino: Desenvolvedor, Designer de UI/UX, Gerente de projeto, Documentador
- Luis Guilherme: Desenvolvedor, Designer de UI/UX, Documentador
- Lucas Daniel: Desenvolvedor, Gerente de projeto, DBA (Administrador de Banco de Dados), Especialista em Segurança
