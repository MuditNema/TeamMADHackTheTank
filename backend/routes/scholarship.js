const express = require('express');
const router = express.Router();
const {addScholarShip,updateScholarShip,getNodeDetails, getAllNodeCount} = require('../controller/scholarshipController');

router.post('/addScholarShip',addScholarShip)
router.put('/updateScholarShip',updateScholarShip)
router.post('/getNodeDetails',getNodeDetails)
router.get('/getAllNodeCount',getAllNodeCount)
module.exports = router