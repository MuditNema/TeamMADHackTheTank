const express = require('express');
const router = express.Router();
const {login,signup,verifyUser, notifyWhatsapp} = require('../controller/userController')
const { notifyEmail } = require('../controller/userController');

router.post('/login',login)

router.post('/signup',signup)

router.post('/verifyEmail',verifyUser)

router.post('/notifyEmail',notifyEmail)

router.post('/notifyWhatsapp',notifyWhatsapp)
module.exports = router