const express = require('express');
const router = express.Router();
const updateEvent = require('../controller/eventController')

router.post('/updateEvent',updateEvent)

module.exports = router