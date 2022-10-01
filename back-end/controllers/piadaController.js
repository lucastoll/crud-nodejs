// Importa o Schema da collection car
const Piada = require('../models/piadasModel');
console.log(Piada.model)

//Controlador manipula os schemas definidos nos models, o controlador contém todos os acessos crud

// @desc    Set piada
// @route   POST /api/piadas
// @access  Private

const setPiada = async (req, res) => {
    // Verifica se o campo model está definido
    console.log(req.body)
    /*if(!req.body.model) {
        res.status(400);
        throw new Error("Por favor adicione um modelo");
    }*/

    // Cria um novo registro para collection piada
    const piada = await Piada.create({
        titulo: req.body.titulo,
        piada: req.body.piada,
        autor: req.body.autor,
    });

	// Exibe o resultado da inserção de registro
    res.status(200).json(piada);
}

// @desc    Get piadas
// @route   GET /api/piadas
// @access  Private

const getPiadas = async (req, res) => {
    // Busca todos os dados na collection car
    const piadas = await Piada.find();

    // Exibe os resultado da busca
    res.status(200).json(piadas);
}

// @desc    Update piadas
// @route   PUT /api/piadas/:id
// @access  Private

const updatePiada = async (req, res) => {
    // Busca um registro pela id na collection Piada
    const piada = await Piada.findById(req.params.id);

    if(!piada) { // Se não encontrar nenhum resultado
        res.status(400);
        throw new Error("Piada não encontrada");
    }

    // Atualiza o registro de acordo com a ID
    const updatedPiada = await Piada.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {
            new: true,
        }
    );
		// Retorna uma mensagem do resultado da atualização
    res.status(200).json(updatedPiada);
}

// @desc    Delete piadas
// @route   DELETE /api/piadas
// @access  Private

const deletePiada = async (req, res) => {
    // Busca um registro pela id na collection Piada
    const piada = await Piada.findById(req.params.id)

    if(!piada) { // Se não foi encontrado nenhum registro
        res.status(400);
        throw new Error("Piada não encontrada");
    }

    // Remove o registro encontrado
    await piada.remove()
    res.status(200).json({ id: req.params.id, message: "Piada removida com sucesso" })
}

module.exports = {
    getPiadas,
    setPiada,
    updatePiada,
    deletePiada,
}