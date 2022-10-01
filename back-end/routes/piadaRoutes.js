const express = require('express');
const router = express.Router();

// Importa as funções de carController.js
const { getPiadas, setPiada, updatePiada, deletePiada } = require('../controllers/piadaController');

// Define a rota para cada função
router.route('/').get(getPiadas);
router.route('/').post(setPiada);
router.route('/:id').put(updatePiada);
router.route('/:id').delete(deletePiada);

// Exporta todas as rotas
module.exports = router;