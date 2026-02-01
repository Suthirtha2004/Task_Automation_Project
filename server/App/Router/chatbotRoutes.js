const express = require('express');
const validateToken = require('../Middleware/validateToken');
const validateRoles = require('../Middleware/validateRole');
const generate = require('../Services/genaiService');
const router = express.Router();

router.get('/chatbot',
    validateToken,
    validateRoles("admin"),
    generate);

module.exports = router;