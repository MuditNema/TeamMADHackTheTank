const Event = require('../models/Event')
const verifyToken = require('./helpers/JWT_Authentication')
module.exports = {
    addEvent : async (req,res) =>{
        try {
            
            const addedEvent = new Event(req.body);
            const result = await addedEvent.save() 

            return res.status(200).json({
                message : "Event tracked successfully"
            })

        } catch (error) {
            res.send(500).json({
                message : "Internal error occurred"
            })
        }
    }
}