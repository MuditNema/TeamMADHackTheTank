    const Heatmap = require('../models/Heatmap');



module.exports = {
    getHeatmap : async (req,res) => {
        try {
            const id = req.body.id
            const uid = req.body.uid
            const heatMap = await Heatmap.findOne({
                id,
                uid
            });
            return res.json({
                message : "Data fetched successfully",
                data : heatMap
            })

        } catch (error) {
            return res.json({
                message : "Internal error" + error
            })
        }
    },
    setHeatmap : async (req,res) => {
        try {
            
            const heatmap = req.body.array;
            const uid = req.body.uid;
            const scholarship_id = req.body.id;
            const heatMap = new Heatmap({
                heatmap,
                uid,
                id:scholarship_id,
            })
            const result = await heatMap.save()
            return res.json({
                message : "Heatmap saved successfully",
                data : result
            })
        } catch (error) {
            return res.json({
                message : "Internal error" + error
            })
        }

    },
}