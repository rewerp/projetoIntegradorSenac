# Projeto Integrador - Sistema de tutoria

## Equipe - Grupo 24

* Misael Alberto Moreira
* Murilo Badelatto
* Victoria Caetano Romualdo
* Matheus De Souza Ferreira
* Rodrigo Ferreira Da Silva
* Rewer Pinheiro

## Sobre o projeto

O projeto nasceu da necessidade de auxilia na solução de um problema. Em construção...

## Técnologias utilizadas

* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/html5/html5-original.svg" height="20" /> HTML
* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/css3/css3-original.svg" height="20" /> CSS
* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/javascript/javascript-original.svg" height="20" /> Javascript
* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/nodejs/nodejs-original.svg" height="20" /> Node.js
* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/mysql/mysql-original.svg" height="20" /> MySQL
* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/vscode/vscode-original.svg" height="20" /> VS Code
* <img src="https://raw.githubusercontent.com/devicons/devicon/1119b9f84c0290e0f0b38982099a2bd027a48bf1/icons/git/git-original.svg" height="20" /> Git e GitHub

## Requisitos

Para executar o sistema, é preciso ter instalado, os aplicativos abaixo:

* MySQL e MySQL Workbench
* Node.js
* Navegador de internet (browser)

## Instalação e configuração

Para preparar o ambiente para utilizar o sistema, é preciso seguir os seguintes passos:

1. Para iniciar, baixe o repositório para um pasta local, pode utilizar o Git, mas não é obrigatório;
1. Depois é necessário fazer o download e instalação do [Node.js](https://nodejs.org/dist/v18.15.0/node-v18.15.0-x64.msi);
1. Em seguida, fazer o download e instalar o gerenciador do banco de dados [MySQL e o Workbench](https://dev.mysql.com/get/Downloads/MySQLInstaller/mysql-installer-community-8.0.32.0.msi);
    1. Após a instalação, execute o MySQL Workbench;
    1. Acesso a conexão de banco de dados localhost que foi criada na instalação;
    1. Copie, cole e execute o conteudo do arquivo _**"script-criar-banco-dados.txt"**_;
    1. Após a execução, atualize a lista de _**Schemas**_ e confirme se existe o schema **"pi_backend"**;
1. Será preciso criar o arquivo _**".env"**_ dentro da pasta de cada projeto, para configurar o sistema:
    1. Abra o arquivo _**".env.example"**_, copie o conteúdo e crie um arquivo _**".env"**_ com as informações reais para configuração;
    1. Esse passo deve ser feito tanto para o projeto _**"pi-backend"**_ e _**"pi-frontend"**_.
1. Depois de configurado os projetos:
    1. Abra a pasta _**"pi-backend"**_ em um terminal, pode ser **cmd.exe** ou qualquer outro, e execute o comando **"npm install"**. 
    1. Repita o passo para _**"pi-frontend"**_.

## Utilizando a aplicação

Após realizar todas as configurações do ambiente do projeto, será preciso executar os servidores da API e da aplicação web:

1. Depois de configurado os projetos:
    1. Abra a pasta _**"pi-backend"**_ em um terminal, pode ser **cmd.exe** ou qualquer outro, e execute o comando **"npm start"**. Se der certo deve demonstrar uma mensagem informando que o servidor está sendo executado.
    1. Repita o passo para _**"pi-frontend"**_.
1. Após executar os servidores, abre o navegador de internet, e acesso o servidor da aplicação web, pelo endereço _**"localhost:3001"**_.

Se tudo der certo, deve ser apresentado a tela inicial da aplicação.