const Scholarship = require('../models/Scholarship')

module.exports = {
    addScholarShip : async (req,res) => {
        try {
            const adddedShcholarShip = new Scholarship(req.body);
            const result = await adddedShcholarShip.save()
        } catch (error) {
            return res.status(500).json({
                message : "Internal error occurred"
            })
        }
    }
}