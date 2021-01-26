## Sobre projeto
* Um web app que auxilia na gerencia de clientes/leads de um agente comercial.
* Podendo prospectar novos leads;
* Visualizar e alterar informações;
* Transformar leads em clientes;
* Planejar suas rotas;


## Como rodar aplicação
* Abra o terminal e navegue até a pasta do projeto;
* No terminal execute o comando: `npm install`;
* Apos a instalação das depedências execute o comando `npm start`;
* Abra o browser no endereco: http://localhost:3000

## Como rodar a API
* Abra o terminal e navegue até a pasta do projeto/static-api;
* No terminal execute o comando: `npm install`;
* obs: caso não tenha JSON server instalado em sua maquina terá de instalar globalmente.
* Apos a instalação das depedências execute o comando `npm start`; 
* Abra o browser no endereco: http://localhost:3001

* Caso haja algum problema verifique se o arquivo package.json contem o script:
"start": "json-server --watch stonedata.json --port 3001"



Endpoints da API: 
http://localhost:3001/clients
http://localhost:3001/leads
http://localhost:3001/script


## informações
* Solução do code challenge da empresa STONE  feito por: Flavio Rocha
* Disponívelem: https://github.com/Flavio27/stone-challenge


