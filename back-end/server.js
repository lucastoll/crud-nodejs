const express = require('express'); // Web Framework
const dotenv = require('dotenv').config(); // Nos permite usar nossas variáveis de ambiente que criamos no arquivo .env
const cors = require('cors');


const port = process.env.PORT || 5000;

const connectDB = require('./config/db'); // Importa a função de conexão com o banco de dados
connectDB(); // Tenta se conectar com o banco de dados

const app = express(); // Cria nosso aplicativo

// Define que o objeto de requisição recebida será no formato de um objeto JSON.
app.use(express.json()); 
app.use(cors());
app.use(express.urlencoded({ extended: false}));

// Define que a rota /api/piadas terá as seguintes rotas declaradas em carRoutes.js
app.use('/api/piadas', require('./routes/piadaRoutes.js'));

// O método se vincula ao host e a porta especificada para vincular e ouvir qualquer conexão
app.listen(port, () => console.log(`listening on port ${port}`))

