const express = require('express');
const router = express.Router();
const {login,signup,verifyUser} = require('../controller/userController')

router.post('/login',login)

router.post('/signup',signup)

router.post('/verifyEmail',verifyUser)

module.exports = router