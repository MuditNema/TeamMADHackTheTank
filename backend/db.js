const mongoose  = require('mongoose')
const MONGO_URL = "mongodb+srv://muditnema14:Atsumumiya123@cluster-htt.lubhq75.mongodb.net/htt";

const connectToMongo = async () =>{
    mongoose.connect(MONGO_URL)
    .then(() => {
        console.log("Connected to Mongo")
    })
    .catch((error) => {
        console.log("Failed to connect to Mongo due to error: " + error)
    })
}


module.exports = connectToMongo;