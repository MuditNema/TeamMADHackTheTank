const express = require('express');
const { setHeatmap, getHeatmap } = require('../controller/heatmapController');
const router = express.Router();


router.post("/set",setHeatmap)
router.post("/get",getHeatmap)

module.exports = router