const express = require('express');
const router = express.Router();
const {addScholarShip,updateScholarShip} = require('../controller/scholarshipController')

router.post('/addScholarShip',addScholarShip)
router.put('/updateScholarShip',updateScholarShip)

module.exports = router