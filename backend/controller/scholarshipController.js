const Scholarship = require('../models/Scholarship')
const User = require('../models/User')
const {convert} = require('./helpers/convertEnum')
function makeArray(d1) {
    var arr = new Array(d1), i, l;
    for(i = 0, l = d1; i < l; i++) {
        arr[i] = new Array();
    }
    return arr;
}

module.exports = {
    addScholarShip : async (req,res) => {
        try {
            const arr = makeArray(11);
            const adddedShcholarShip = new Scholarship(req.body);
            adddedShcholarShip.graph = arr;
            const result = await adddedShcholarShip.save()
            return res.status(200).json({
                message : "Successfully scholarship added"
            })
        } catch (error) {
            return res.status(500).json({
                message : "Internal error occurred"
            })
        }
    },
    updateScholarShip : async (req,res) => {
        try {
            console.log(req.body);
            const scholarship_id = req.body.id;
            const current_node = req.body.curr
            const next_node = req.body.next
            const uid = req.body.uid

            const myScholarShip = await Scholarship.findById(scholarship_id);
            if(current_node != "-1") {
                const arr = myScholarShip.graph[convert(current_node)].filter((e) => {
                    return e != uid
                })
                myScholarShip.graph[convert(current_node)] = arr;
            };
            myScholarShip.graph[convert(next_node)].push(uid);
            
            await Scholarship.findByIdAndUpdate(scholarship_id, myScholarShip)
            
            return res.status(200).json({
                message : "Event updated successfully"
            })

        } catch (error) {
            return res.status(500).json({
                message : error
            })
        }
    },
    getNodeDetails: async (req,res) => {
        try {
            const scholarship_id = req.body.id
            const node = convert(req.body.node)

            const Obj = await Scholarship.findById(scholarship_id)
            const userIdList = Obj.graph[node]

            let userInfoList = [];
            for(let i=0;i<userIdList.length;i++) {
                const UserObject = User.findById(userIdList[i]);
                userInfoList.push({
                    fname:UserObject.fname,
                    lname:UserObject.lname,
                    email:UserObject.email
                })
            }

            return res.status(200).json({
                messgae : "Data fetched successfully",
                data : userInfoList
            })

        } catch (error) {
            return res.status(500).json({
                message : error
            })
        }
    }
}