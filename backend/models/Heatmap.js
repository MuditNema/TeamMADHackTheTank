const mongoose = require('mongoose');

const HeatmapSchema =  new mongoose.Schema({
    heatmap: {
        type:Array,
        default:[]
    },
    id: {
        type : mongoose.Schema.Types.ObjectId
    },
    uid: {
        type : mongoose.Schema.Types.ObjectId
    }
})

module.exports = mongoose.model("Heatmap",HeatmapSchema)