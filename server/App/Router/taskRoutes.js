const express = require('express');
const validateToken = require('../Middleware/validateToken');
const validateRoles = require('../Middleware/validateRole');
const { createTask, getTask, updateTask, deleteTask, getTaskEmp } = require('../Controller/taskController');
const router = express.Router();

//Admin Task access routes
router.post('/admin/createTask',
    validateToken,
    validateRoles("admin"),
    createTask);

router.get('/admin/taskview',
    validateToken,
    validateRoles("admin"),
    getTask
);

router.put('/admin/updateTask/:id',
    validateToken,
    validateRoles("admin"),
    updateTask
);

router.delete('/admin/deleteTask/:id',
    validateToken,
    validateRoles("admin"),
    deleteTask
);

// EMPLOYEE TASK VIEW

router.get('/employee/taskview',
    validateToken,
    validateRoles("employee"),
    getTaskEmp
);

module.exports = router;