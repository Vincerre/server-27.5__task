const express = require('express');
const router = express.Router();
const SeatController = require('../controllers/seats.controller');

router.route('/', SeatController.getAll);

router.route('/', SeatController.add);

router.route('/:id', SeatController.getById);

router.route('/:id', SeatController.edit);

router.route('/:id', SeatController.delete);

module.exports = router;
