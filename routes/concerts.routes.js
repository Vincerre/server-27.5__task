const express = require('express');
const router = express.Router();
const ConcertController = require('../controllers/concerts.controller');

router.route('/', ConcertController.getAll);

router.route('/', ConcertController.add);

router.route('/:id', ConcertController.getById);

router.route('/:id', ConcertController.edit);

router.route('/:id', ConcertController.delete);

module.exports = router;
