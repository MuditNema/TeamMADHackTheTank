const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema =  new mongoose.Schema({
    fname : {
        type : String,
        required : true
    },
    lname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
        minlength : 8
    },
    isVerified : {
        type : Boolean,
        default : false
    },
})
//using "pre" middleware function to hash the password before adding the user to the database


UserSchema.methods.isValidPassword = async function (password) {
    try {
        return bcrypt.compare(password, this.password)
    } catch (error) {
        throw error
    }
}
module.exports = mongoose.model("User",UserSchema)