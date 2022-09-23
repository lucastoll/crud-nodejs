const express = require('express'); // Web Framework
const dotenv = require('dotenv').config(); // Nos permite usar nossas variáveis de ambiente que criamos no arquivo .env

const port = process.env.PORT || 5000;

const connectDB = require('./config/db'); // Importa a função de conexão com o banco de dados
connectDB(); // Tenta se conectar com o banco de dados

const app = express(); // Cria nosso aplicativo


// Criação de uma rota simples de testes
app.get('/api/cars', (req, res) => {
    res.json({ message: 'Get Cars' }); // Retorna uma mensagem ao cliente quando a rota é acessada através do método GET
});

// O método se vincula ao host e a porta especificada para vincular e ouvir qualquer conexão
app.listen(port, () => console.log(`listening on port ${port}`))

