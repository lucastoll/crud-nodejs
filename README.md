# crud-nodejs

![image](https://user-images.githubusercontent.com/86172649/207129006-9e2b5f76-854c-4acd-b2fe-2631c40b3cd5.png)


Nesta branch foi utilizado o MongoDB para o desenvolvimento do back-end, esta aplicação foi apresentada para nota na disciplica de banco de dados, para isto, também foi montada uma apresentação com o tema "Banco de dados orientado a documentos", contextualizando a tecnologia.

[Seminário.pdf](https://github.com/lucastoll/crud-nodejs/files/10211168/OrientadoADocumentos.pdf)

A aplicação estava hospedada na digital ocean com a parte do back-end, e com o front-end na vercel, entretanto, o hospedagem do back-end é pega pelo motivo do código estar rodando 24/7 no servidor, então a hospedagem foi parada após a apresentação do projeto em aula. 

## 🟢 Tecnologias
  
### Back-end

Node.js, express, mongoose e dotenv.

<ul>
  <li>Node.js</li>
</ul>

Ferramenta utilizada para instalação de pacotes (com o Node Package Manager) e para a execução do JavaScript no back-end, sem um browser.

<ul>
  <li>Express</li>
</ul>

Framework para o desenvolvimento de aplicações JavaScript com o Node.js, foi utilizado para fazer as requisições da aplicação 

<ul>
  <li>Mongoose</li>
</ul>

Biblioteca para desenvolvimento com MongoDB em Node.js

<ul>
  <li>dotenv</li>
</ul>

Pacote que consegue pegar as informações do arquivo .env e colocar no código em tempo real, sendo que o .env é o arquivo de informações confidenciais do projeto que não sobe pro git

## 📁 Sistema de arquivos

![image](https://user-images.githubusercontent.com/86172649/207131697-33301c40-e1c8-4d5f-89e4-9f75dc92fd26.png)

Neste readme será explicado sobre as pastas config, controllers, models, routes e por fim sobre o arquivo server.js que conecta todas as pastas.

<ul>
  <li>config</li>
</ul>

Dentro da config existe o db.js onde é configurada a conexão da aplicação com o banco de dados, para isto é utilizado o login e a senha do mongodb, assim como o hash do banco disponibilizada na plataforma do MongoDB
![image](https://user-images.githubusercontent.com/86172649/207132359-46357db0-79ce-4290-8970-4cefbad02f1a.png)

<ul>
  <li>models</li>
</ul>

Dentro dessa pasta é configurado o modelo que os dados do projeto vão seguir, lembrando que isso não é obrigatório dentro do MongoDB, mas nesse caso adiciona mais segurança pois já sabemos todas as informações que serão manipuladas neste banco

![image](https://user-images.githubusercontent.com/86172649/207132685-93d71705-e1c7-4ef4-be7e-f09484783b6a.png)

<ul>
  <li>controllers</li>
</ul>

Os controladores manipulam os schemas definidos nos models, no caso dessa aplicação o controlador contém todos os acessos do crud, para isto são utilizadas as funções do mongoose create (post), find(get), findByIdAndUpdate (update) e remove (delete)

![image](https://user-images.githubusercontent.com/86172649/207133451-75055096-113b-4d16-b1ff-4c07b74ba762.png)

<ul>
  <li>routes</li>
</ul>

A routes utiliza o express para dizer qual função criada nos controladores vai em que rota e utiliza qual acesso do crud 

![image](https://user-images.githubusercontent.com/86172649/207133680-a8cb7801-5127-432e-ad5c-ba3592be3016.png)

<ul>
  <li>server.js</li>
</ul>

Basicamente o server.js faz o servidor da aplicação rodar, nele é configurado a porta de acesso, então é rodada a função de conexão do banco configurada na config, após isso o express é instanciado, e a partir disso é utilizado o .use para dizer ao front-end onde as rotas criadas estaram hospedadas, por fim, é feito o .listen no express instanciado dentro da porta configurada, e o servidor começa a rodar
![image](https://user-images.githubusercontent.com/86172649/207134276-f830fcb6-2c99-4f1a-9424-a01a3205d8e3.png)

## ⌨️ Como executar

Para executar esse repositório você precisa de um banco criado no MongoDB (pode ser usado gratuitamente!), após isso você vai fazer um cluster e pegar a URI disponibilizada, e a partir disso você vai configurar o .env na pasta que você clonou o repositório com as seguintes informações
<br>
NODE_ENV = development
<br>
PORT = porta que o servidor vai rodar
<br>
MONGO_URI = URI do mongo.

A partir da pasta inicial

```bash
$ cd front-end

## Instalar as dependências.
$ npm install

## Iniciar o projeto - (localhost:3000)
$ yarn dev 
```

```bash
$ cd back-end

## Instalar as dependências.
$ npm install

## Iniciar o projeto - (localhost:env.port)
$ npm run server
```

![image](https://user-images.githubusercontent.com/86172649/207116366-46f5bd63-6aab-4af6-895c-d5d823e60e0f.png)

## Agradecimentos

Agradeço muito ao <a href="https://github.com/Rafael-Araujo-dev" target="_blank">Rafael Araujo</a> pela ajuda no desenvolvimento e nos conceitos do MongoDB, valeu rafinha!!!
