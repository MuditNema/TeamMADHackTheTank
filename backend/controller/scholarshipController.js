const Scholarship = require('../models/Scholarship')
const User = require('../models/User')
const {convert} = require('./helpers/convertEnum')
const {graph_array} = require('../graph.json')
function makeArray(d1) {
    var arr = new Array(d1), i, l;
    for(i = 0, l = d1; i < l; i++) {
        arr[i] = new Array();
    }
    return arr;
}


const alreadyExists = async (user_id,scholarship_id,starting_node) => {
    const scholarshipDetails = await Scholarship.findById(scholarship_id)
    const nodeDetails = scholarshipDetails.graph[starting_node]; 
    if(nodeDetails.IndexOf(user_id)!=-1) return true;
    let ans = false;
    for(let i=0;i<graph_array[starting_node].length;i++) {
        if(graph[starting_node][i]==1 && !visited[i]){
            ans = ans || alreadyExists(user_id,scholarship_id,i)
        }
    }
    return ans;
}

const pushToArray = async (myScholarShip,next_node,uid,scholarship_id) => {
    myScholarShip.graph[convert(next_node)].push(uid);
    await Scholarship.findByIdAndUpdate(scholarship_id, myScholarShip)
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
            // console.log(req.body);
            const scholarship_id = req.body.id;
            const current_node = req.body.curr
            const next_node = req.body.next
            const uid = req.body.uid
            const myScholarShip = await Scholarship.findById(scholarship_id);
            //remove node from everywhere else and update it to the apply node in the graph
            if(next_node=="applied") {
                for(let i=0;i<10;i++) {
                    const arr = myScholarShip.graph[i].filter((e)=>{
                        return e != uid
                    })
                    myScholarShip.graph[i] = arr;
                }
            }

            if(current_node == "-1") {
                await pushToArray(myScholarShip,next_node,uid,scholarship_id)
            }
            else if(current_node == "view"){
                if(!alreadyExists(uid,convert(next_node))){
                    //do add and update
                    const arr = myScholarShip.graph[convert(current_node)].filter((e) => {
                        return e != uid
                    })
                    myScholarShip.graph[convert(current_node)] = arr
                    await pushToArray(myScholarShip,next_node,uid,scholarship_id)
                }
                //redirect to the url
            }
            else {
                if(!alreadyExists(uid,convert(current_node))) {
                    //do add and update
                    const arr = myScholarShip.graph[convert(current_node)].filter((e) => {
                        return e != uid
                    })
                    myScholarShip.graph[convert(current_node)] = arr
                    await pushToArray(myScholarShip,next_node,uid,scholarship_id)
                }
                //redirect to the url
            }
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
    },
    getAllScholarships : async (req,res) => {
        try {
            const allScholarships = await Scholarship.find()
            return res.status(200).json({
                message : "Scholarships details fetched successfully",
                data : allScholarships
            })
        } catch (error) {
            return res.status(500).json({
                message : "Error fetching scholarships details " + error
            })
        }
    }
}