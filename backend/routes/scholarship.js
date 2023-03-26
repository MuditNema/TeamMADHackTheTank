const express = require('express');
const router = express.Router();
const {addScholarShip,updateScholarShip,getNodeDetails, getAllNodeCount, setNodeSessionAverage} = require('../controller/scholarshipController');

router.post('/addScholarShip',addScholarShip)
router.put('/updateScholarShip',updateScholarShip)
router.post('/getNodeDetails',getNodeDetails)
router.get('/getAllNodeCount/:id',getAllNodeCount)
router.post('/updateNode',setNodeSessionAverage)
module.exports = router