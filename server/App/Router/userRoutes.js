const express = require('express');
const validateToken = require('../Middleware/validateToken');
const validateRoles = require('../Middleware/validateRole');
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


//Employee Access Router

router.get(
    '/employee',
    validateToken,
    validateRoles("admin","employee"),
    (req,res)=>{
        res.json({message : "Welcome Employee"})
    }
);

module.exports = router;