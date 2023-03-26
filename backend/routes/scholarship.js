const express = require('express');
const router = express.Router();
const {getAllScholarships,addScholarShip,updateScholarShip,getNodeDetails, getAllNodeCount, setNodeSessionAverage,getAllScholarshipID} = require('../controller/scholarshipController');

router.post('/addScholarShip',addScholarShip)
router.put('/updateScholarShip',updateScholarShip)
router.post('/getNodeDetails',getNodeDetails)
router.get('/getAllNodeCount/:id',getAllNodeCount)
router.post('/updateNode',setNodeSessionAverage)
router.get('/getAllScholarshipID',getAllScholarships)
module.exports = router