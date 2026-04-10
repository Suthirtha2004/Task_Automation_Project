const express = require('express');
const router = express.Router();

const validateToken = require('../Middleware/validateToken');
const { UserRegister, UserLogin, UserLogout } = require('../Controller/authController');

router.post('/user/register', UserRegister);
router.post('/user/login', UserLogin);
router.get('/user/logout',UserLogout);

module.exports = router;