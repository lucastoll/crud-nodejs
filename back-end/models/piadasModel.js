const mongoose = require('mongoose');

// Cria a estrutura da collection piada
const piadaSchema = mongoose.Schema(
    {
        titulo: { // Nome do campo
            type: String, // Tipo do campo
            required: [true, "Defina um título para a piada"] // Define que o campo é obrigatório e caso não estiver preenchido, retorna uma mensagem de erro
        },
        piada: { // Nome do campo
            type: String, // Tipo do campo
            required: [true, "Digite a piada"] // Define que o campo é obrigatório e caso não estiver preenchido, retorna uma mensagem de erro
        },
        autor: { // Nome do campo
            type: String, // Tipo do campo
            required: [true, "Defina um autor para a piada"] // Define que o campo é obrigatório e caso não estiver preenchido, retorna uma mensagem de erro
        },
        likes: {
            type: Number,
            default: 0
        },
        dislikes: {
            type: Number,
            default: 0
        }
    }, 
    {
        timestamps: true, // Registra a data de criação e última atualização do registro
    }
);

// Exporta o Schema da collection piada
module.exports = mongoose.model('Piada', piadaSchema);