const express = require('express');
const router = express.Router();
const {addScholarShip,updateScholarShip,getNodeDetails} = require('../controller/scholarshipController')

router.post('/addScholarShip',addScholarShip)
router.put('/updateScholarShip',updateScholarShip)
router.post('/getNodeDetails',getNodeDetails)
module.exports = router