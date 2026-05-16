const express = require('express');
const validateToken = require('../Middleware/validateToken');
const validateRoles = require('../Middleware/validateRole');
const generate = require('../Services/genaiService');
const generateSummary = require('../Services/summarizerAi');
const router = express.Router();

router.post('/chatbot',
    validateToken,
    validateRoles("admin"),
    generate);

router.post('/summarizer',
    validateToken,
    validateRoles("admin"),
    generateSummary);

    
module.exports = router;