const mongoose = require('mongoose');

// Cria a estrutura da collection car
const carSchema = mongoose.Schema(
    {
        model: { // Nome do campo
            type: String, // Tipo do campo
            required: [true, "Please add a model value"] // Define que o campo é obrigatório e caso não estiver preenchido, retorna uma mensagem de erro
        },
        year: { // Nome do campo
            type: Date, // Tipo do campo
        },
        category: { // Nome do campo
            type: String // Tipo do campo
        },
    }, 
    {
        timestamps: true, // Registra a data de criação e última atualização do registro
    }
);

// Exporta o Schema da collection car
module.exports = mongoose.model('Car', carSchema);