const express = require('express');
const validateToken = require('../Middleware/validateToken');
const validateRoles = require('../Middleware/validateRole');
const { getMe } = require('../Controller/userController');
const router = express.Router();


//Admin Access Router
router.get(
    '/admin',
    validateToken,
    validateRoles("admin"),
    (req,res)=>{
        res.json({message : "Welcome Admin"});
    }
);

router.get('/me',validateToken,getMe);
//Employee Access Route

router.get(
    '/employee',
    validateToken,
    validateRoles("admin","employee"),
    (req,res)=>{
        res.json({message : "Welcome Employee"})
    }
);

module.exports = router;