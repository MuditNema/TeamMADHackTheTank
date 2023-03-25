const mongoose = require('mongoose')

const ScholarshipSchema = new mongoose.Schema({
    name:{
        type:String
    },
    amount:{
        type:Number
    },
    graph : {
        type : Array,
    }
})

module.exports = mongoose.model("Scholarship",ScholarshipSchema)