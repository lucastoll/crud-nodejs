const mongoose = require('mongoose');

// Função assíncrona abre uma conexão com o banco de dados
const connectDB = async () => {
    try { // Tenta realizar uma conexão com o banco de dados
				// Conecta com o banco de dados 
        const conn = await mongoose.connect(process.env.MONGO_URI); 
				// process.env.MONGO_URI = String de conexão declarada no arquivo .env
        console.log(`MongoDB Connected: ${conn.connection.host}`); // Exibe as informações de conexão

    } catch (err) { // Se não for possível se conectar com o banco de dados
        console.log(err); // Exibe uma mensagem de erro
        process.exit(1); // Encerra a tentativa de conexão com o banco de dados
    }
}

// exporta a função de conexão com o banco de dados
module.exports = connectDB;