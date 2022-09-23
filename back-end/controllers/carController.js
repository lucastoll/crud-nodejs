// Importa o Schema da collection car
const Car = require('../models/carsModel');

//Controlador manipula os schemas definidos nos models, o controlador contém todos os acessos crud

// @desc    Set car
// @route   POST /api/cars
// @access  Private

const setCar= async (req, res) => {
    // Verifica se o campo model está definido
    if(!req.body.model) {
        res.status(400);
        throw new Error("Please add a model value");
    }

    // Cria um novo registro para collection car
    const car = await Car.create({
        model: req.body.model,
        year: req.body.year,
        category: req.body.category,
    });

		// Exibe o resultado da inserção de registro
    res.status(200).json(car);
}

// @desc    Get cars
// @route   GET /api/cars
// @access  Private

const getCars = async (req, res) => {
    // Busca todos os dados na collection car
    const cars = await Car.find();

    // Exibe os resultado da busca
    res.status(200).json(cars);
}

// @desc    Update car
// @route   PUT /api/cars/:id
// @access  Private

const updateCar = async (req, res) => {
    // Busca um registro pela id na collection Car
    const car = await Car.findById(req.params.id);

    if(!car) { // Se não encontrar nenhum resultado
        res.status(400);
        throw new Error("Car not found");
    }

    // Atualiza o registro de acordo com a ID
    const updatedCar = await Car.findByIdAndUpdate(
        req.params.id, 
        req.body, 
        {
            new: true,
        }
    );
		// Retorna uma mensagem do resultado da atualização
    res.status(200).json(updatedCar);
}

// @desc    Delete car
// @route   DELETE /api/cars
// @access  Private

const deleteCar = async (req, res) => {
    // Busca um registro pela id na collection Car
    const car = await Car.findById(req.params.id)

    if(!car) { // Se não foi encontrado nenhum registro
        res.status(400);
        throw new Error("Car not found");
    }

    // Remove o registro encontrado
    await car.remove()
    res.status(200).json({ id: req.params.id })
}

module.exports = {
    getCars,
    setCar,
    updateCar,
    deleteCar,
}