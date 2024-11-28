const express = require('express');
const Student = require("../Models/Student");
const { login ,signup,complainInfo,logout, viewComplain, adminLogout} = require('../Controller/StudentController');
const router = express.Router()

router.post('/signup',signup)
router.post('/login',login)
router.post('/complain-info',complainInfo);
router.post('/logout',logout)
router.get('/complain',viewComplain)
router.post('/logoutadmin',adminLogout)

module.exports = router