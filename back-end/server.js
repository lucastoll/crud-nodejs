const express = require('express'); // Web Framework
const dotenv = require('dotenv').config(); // Nos permite usar nossas variáveis de ambiente que criamos no arquivo .env

const port = process.env.PORT || 5000;

const connectDB = require('./config/db'); // Importa a função de conexão com o banco de dados
connectDB(); // Tenta se conectar com o banco de dados

const app = express(); // Cria nosso aplicativo

// Define que o objeto de requisição recebida será no formato de um objeto JSON.
app.use(express.json()); 
app.use(express.urlencoded({ extended: false}));

// Define que a rota /api/cars terá as seguintes rotas declaradas em carRoutes.js
app.use('/api/cars', require('./routes/carRoutes.JS'));

// O método se vincula ao host e a porta especificada para vincular e ouvir qualquer conexão
app.listen(port, () => console.log(`listening on port ${port}`))

