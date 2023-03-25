const User = require('../models/User')
const {userValidateSchema} = require('./helpers/validationSchema') 
const {signAccessToken} =  require('./helpers/JWT_Authentication')
const bcrypt = require('bcrypt')
// const sendMail = require('./helpers/sendMail')
module.exports = {
    login : async (req,res) => {
        try {
            const user = await User.findOne({email:req.body.email})
            //check whether user is exists or not
            if(!user) {
                throw new Error("User not found")
            }
            //match the password
            if(!user.isValidPassword(req.body.password)) {
                throw new Error("Invalid password")
            }

            //the user is loggedin at this point and we fetch the access token
            const accessToken = await signAccessToken(user._id)
            return res.status(200).json({
                message : "User logged in successfully",
                token : accessToken,
                user
            })
        } catch (error) {
            //error handling
            console.log(error)
            return res.status(500).json({
                message : "Some error occurred",
            });
        }
    },
    signup : async (req,res) => {
        try {
            //validation of the input entered by user using JOI
            const validationResult = await userValidateSchema.validateAsync(req.body)
            console.log(validationResult);
            if(!validationResult) {
                return res.status(400).json({
                    message: 'Invalid information'
                })
            }
            //check whether the user already exists
            const user = await User.findOne({email:validationResult.email})
            
            if(user){
                return res.status(401).json({
                    message : "User already exists with email " + validationResult.email 
                })
            }
            //after all the verifications, add the user to the database
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(validationResult.password, salt)
            validationResult.password = hashedPassword
            const newUser = new User(validationResult)
            const result = await newUser.save()
            //user finally added to the database
            //Sending OK status to the client and creating the accessToken for the client side

            const accessToken = await signAccessToken(result._id) 
            // sendMail(newUser,accessToken)
            return res.status(200).json({
                data : result,
                token : accessToken,
                message : "User added successfully"
            })
        } catch (error) {
            //error handling
            return res.status(500).json({
                message : error
            });
        }
    },
    verifyUser : async (req,res) => {
        try {
            //getting access token from header file
            const token = req.headers['authorization'];
            console.log(req.headers)
            var base64Payload = token.split(".")[1];
            var payloadBuffer = Buffer.from(base64Payload, "base64");
            const {id} = JSON.parse(payloadBuffer.toString())
            console.log(id)
            if(!id){
                throw new Error("Email Not Valid")
            }
            await User.findByIdAndUpdate(id,{
                $set: {
                    isVerified: true
                }
            })
            return res.status(200).json({
                message : "User verified"
            })

        } catch (error) {
            return res.status(500).json({
                message : error
            })
        }
    }
}


