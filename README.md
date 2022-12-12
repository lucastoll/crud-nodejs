# crud-nodejs

![image](https://user-images.githubusercontent.com/86172649/207102244-0e517786-9a1d-4b5d-a3c1-3cdc5ea0f9a6.png)


## 🎤 O que é 

Esta aplicação é um desafio de um processo seletivo que foi desenvolvido apenas para fins de estudo, o desafio consiste em desenvolver um banco de piadas online, onde os usuários podem ver todas as piadas cadastradas e interagir com elas através do like, deslike e denuncia, além disso o usuário também pode registrar piadas.

O maior desafio deste projeto para mim foi a implementação do back-end que está em contato em tempo real com a aplicação, ele foi desenvolvido com SQL e também no MongoDB (branch mongodb).

O mockup do projeto pode ser encontrado <a href="https://www.figma.com/file/kGx4D6ev6UWrUvWKNxVT08/Prova-Frontend?node-id=0%3A1&t=8iOzPatQPMXiLJOE-1" target="_blank">aqui</a>.

## 🔴 Tecnologias

### Front-end 

Para desenvolver o front-end foi utilizado o next-js na versão 12, e algumas dependências foram utilizadas no desenvolvimento, sendo elas:

<ul>
  <li>Styled-components - css in js</li>
  <li>Uuid - hashs unicos para os componentes que utilizam .map</li>
  <li>Radixui - componentes prontos e completamentes acessíveis, utilizado no popover de ordenação</li>
  <li>Fontawesome - ícones de like / deslike</li>
  <li>Axios - utilizado para fazer as requisições</li>
</ul>

  ![image](https://user-images.githubusercontent.com/86172649/207105929-7aa07603-a0a8-44c9-a8c0-239195f038f9.png)
  
 ### Back-end
 
 Nesta branch foi utilizado o SQL para construir o back-end dentro do servidor local, para isto, uma estrutura foi montada e os seguintes programas foram utilizados: XAMPP, Apache, HeidiSQL e Insomnia

<ul>
  <li>XAMPP</li>
</ul>
 Serve para separar um espaço na memória do computador para o banco de dados rodar, ele é um ambiente de desenvolvimento PHP e Perl que disponibiliza a instação e o uso do Apache e do MySQL de maneira facilitada, então é possivel fazer o uso desses 2 para manipular um banco de dados no seu computador.
 
 <br>
 
<ul>
 <br>
  <li>Apache</li>
</ul>

Servidor Web responsável por distribuir os arquivos, sem ele não há requisição e resposta, ele é um software que conecta um servidor e o navegador, localmente ele toma o localhost e é la que nos criamos o banco de dados, na foto é possível ver que o banco MySQL foi criado na porta 3306
![image](https://user-images.githubusercontent.com/86172649/207112667-2d82c05a-58ae-40f1-bd6a-d34529ece872.png)

<ul>
  <li>Insomnia</li>
</ul>

Software utilizado para fazer requisições e testar o banco antes de implementar propriamente o front-end.

<ul>
  <li>HeidiSQL</li>
</ul>

IDE para manipulação do SQL, antes de desenvolver o código foram criadas as tabelas nele.

Além disso foram utilizadas as seguintes tecnologias para o desenvolvimento do código do back-end: Node.js, express, MySQL para node.js.

<ul>
  <li>Node.js</li>
</ul>

Ferramenta utilizada para instalação de pacotes (com o Node Package Manager) e para a execução do JavaScript no back-end, sem um browser.

<ul>
  <li>Express</li>
</ul>

Framework para o desenvolvimento de aplicações JavaScript com o Node.js, foi utilizado para fazer as requisições da aplicação 

<ul>
  <li>MySQL para node.js</li>
</ul>

Framework para o desenvolvimento conjunto de node.js com mysql


## 🟡 index.js

Todo o back-end da aplicação está configurado no index.js, onde é criado o a conexão com o banco local e as rotas de requisições com o express

![image](https://user-images.githubusercontent.com/86172649/207115812-9ae189eb-6057-4e53-9994-169295768af6.png)

## ⌨️ Como executar

Clone o projeto e acesse a pasta crud-nodejs

Inicie o servidor mysql e o apache pelo xamp e através do HeidiSQL crie as tabelas com a seguinte query

```sql
CREATE TABLE `piadas` (
	`id` TINYINT(3) NOT NULL AUTO_INCREMENT,
	`titulo` VARCHAR(100) NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
	`piada` VARCHAR(500) NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
	`autor` VARCHAR(100) NOT NULL DEFAULT '' COLLATE 'utf8_general_ci',
	`likes` SMALLINT(6) NULL DEFAULT '0',
	`dislikes` SMALLINT(6) NULL DEFAULT '0',
	`dataPublicacao` TIMESTAMP NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='utf8_general_ci'
ENGINE=InnoDB
AUTO_INCREMENT=20
;
```

A partir da pasta inicial

```bash
$ cd front-end

## Instalar as dependências.
$ yarn

## Iniciar o projeto - (localhost:3000)
$ yarn dev 
```

```bash
$ cd back-end

## Instalar as dependências.
$ yarn

## Iniciar o projeto - (localhost:3006)
$ yarn dev 
```

## 🎉 Agradecimentos

Agradeço muito ao <a href="https://github.com/vicentepcamargo" target="_blank">Vicente</a> e ao <a href="https://github.com/EduardooPV" target="_blank">Luiz Eduardo</a> pela ajuda no desenvolvimento do projeto e no entendimento dos conceitos de SQL e Back-end em geral.

