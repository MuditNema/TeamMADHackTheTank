const mongoose = require('mongoose')
const eventTypeEnumerator = ['click','component_on_init','component_on_destroy']

const ScholarshipSchema = new mongoose.Schema({
    
   
})

module.exports = mongoose.model("Scholarship",ScholarshipSchema)