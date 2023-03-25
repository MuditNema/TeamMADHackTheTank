const JWT = require('jsonwebtoken')
const SECRET_KEY = "hackthetank"
const signAccessToken = (userId) => {
    return new Promise ((resolve, reject) => {
        const payload = {
            id : userId
        }
        const options = {}

        JWT.sign(payload,SECRET_KEY,options,(error,token) => {
            if(error) {
                return reject(json({
                    message : "Internal server error occurred while signing token"
                }))
                
            }
            resolve(token)
        })
    })
}

const verifyToken = async (token) => {
    try {
        const isValidToken = await JWT.verify(token,SECRET_KEY)
        return isValidToken
    } catch (error) {
        return false
    }
}

module.exports = {signAccessToken,verifyToken}