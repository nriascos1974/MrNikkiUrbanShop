const express = require('express');
const router = express.Router();
const getAllCategories = require('../controllers/category/APIgetAllCategories')

// GET all categorys
router.get('/categories', (req, res, next) => getAllCategories(req, res))

module.exports = router;