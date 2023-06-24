const express = require('express');
const router = express.Router();
const TestimonialController = require('../controllers/testimonials.controller');

router.route('/', TestimonialController.getAll);

router.route('/random', TestimonialController.getRandom);

router.route('/', TestimonialController.add);

router.route('/:id', TestimonialController.getById);

router.route('/:id', TestimonialController.edit);

router.route('/:id', TestimonialController.delete);
module.exports = router;
