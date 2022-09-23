const express = require('express');
const router = express.Router();

// Importa as funções de carController.js
const { getCars, setCar, updateCar,  deleteCar } = require('../controllers/carController');

// Define a rota para cada função
router.route('/').get(getCars);
router.route('/').post(setCar);
router.route('/:id').put(updateCar);
router.route('/:id').delete(deleteCar);

// Exporta todas as rotas
module.exports = router;