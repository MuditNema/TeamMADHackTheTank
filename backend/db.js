const mongoose  = require('mongoose')
const MONGO_URL = "";
// const MONGO_URL = "mongodb://localhost:27017"

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
