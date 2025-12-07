const express = require('express');
const router = express.Router();

const validateToken = require('../Middleware/validateToken');
const { UserRegister, UserLogin } = require('../Controller/authController');

router.post('/user/register', UserRegister);
router.post('/user/login', UserLogin);

module.exports = router;