const express = require('express');
const router = express.Router();
const addEvent = require('../controller/eventController')

router.post('/addEvent',addEvent)

module.exports = router