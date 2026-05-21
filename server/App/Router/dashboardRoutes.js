const express = require('express');
const router = express.Router();

const validateToken = require('../Middleware/validateToken');
const validateRoles = require('../Middleware/validateRole');
const { getAdminDashboard, getUserDashboard, getEmployees } = require('../Controller/dashboardController');

router.get('/admin/dashboard',
    validateToken,
    validateRoles('admin'),
    getAdminDashboard
);

router.get('/employee/dashboard',
    validateToken,
    getUserDashboard
);

router.get('/admin/dashboard/employeeList',
    validateToken,
    validateRoles('admin'),
    getEmployees
)

module.exports = router;