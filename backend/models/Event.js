const mongoose = require('mongoose')
const eventTypeEnumerator = ['view','TnC','bookmark','peerReview','downloadRulebook','applied','docUpload','visitSponsor','enquiry','email','reUpload']

const EventSchema = new mongoose.Schema({
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    },
    event_type : {
        type : String,
        required : true,
        enum:eventTypeEnumerator
    },
    timestamp: {
        type : Date,
        required:true,
    },
    target_id: {
        type:String,
        required:true,
    },
    target_path:{
        type:String,
        required:true
    },
    current_path: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Event",EventSchema)