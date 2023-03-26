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

const msToTime =(ms) => {
    var milliseconds = Math.floor((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
  }

const alreadyExists =  (user_id,myScholarShip,starting_node) => {
    // const scholarshipDetails = await Scholarship.findById(scholarship_id)
    const nodeDetails = myScholarShip.graph[starting_node]; 
    if(nodeDetails.indexOf(user_id)!=-1) return true;
    let ans = false;
    for(let i=0;i<graph_array[starting_node].length;i++) {
        if(graph_array[starting_node][i]==1){
            ans = ans ||  alreadyExists(user_id,myScholarShip,i)
        }
    }
    console.log(starting_node, ans)
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
            const time_arr = makeArray(11)
            const adddedShcholarShip = new Scholarship(req.body);
            adddedShcholarShip.graph = arr;
            adddedShcholarShip.time = time_arr;
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
                for(let i=0;i<=10;i++) {
                    const arr = myScholarShip.graph[i].filter((e)=>{
                        return e != uid
                    })
                    myScholarShip.graph[i] = arr;
                }
            }

            if(current_node == "-1") {
                //check for multiple pushes
                if(myScholarShip.graph[0].indexOf(uid)==-1){
                    //pushing to array
                    await pushToArray(myScholarShip,next_node,uid,scholarship_id)
                }
            }
            else {
                // console.log(myScholarShip)
                if(!alreadyExists(uid,myScholarShip,convert(next_node))){
                    //do add and update
                    console.log('Reached')
                    const arr = myScholarShip.graph[convert(current_node)].filter((e) => {
                        return e != uid
                    })
                    myScholarShip.graph[convert(current_node)] = arr
                    await pushToArray(myScholarShip,next_node,uid,scholarship_id)
                }
                else {
                    const arr = myScholarShip.graph[convert(current_node)].filter((e) => {
                        return e != uid
                    })
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
    getAllNodeCount: async (req,res) => {
        try {
            const scholarship_id = req.params.id
            const scholarShipObject = await Scholarship.findById(scholarship_id);
            let nodeCountList = []
            for(let i = 0;i<11;i++) {
                nodeCountList.push(scholarShipObject.graph[i].length)
            }
            console.log(nodeCountList)
            return res.status(200).json({
                messgae : "Node data fetched successfully",
                data : nodeCountList
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
            console.log(userIdList)
            const userList = await User.find({
                "_id": { $in: userIdList}
            }).select(["fname","lname","email"])
            console.log(userList)
            return res.status(200).json({
                messgae : "Data fetched successfully",
                data : {
                    userDetails : userList,
                    avg_time : msToTime(Obj.time[node])
                }
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
    },
    setNodeSessionAverage: async (req,res) =>  {
        try {
            const scholarship_id = req.body.id;
            const start_time = req.body.start;
            const end_time = req.body.end;
            const node = convert(req.body.node)

            let time_spent = (end_time - start_time);
            
            const myScholarShip = await Scholarship.findById(scholarship_id)
            time_spent += myScholarShip.time[node]
            myScholarShip.time[node] = time_spent
            await Scholarship.findByIdAndUpdate(scholarship_id, myScholarShip)

            return res.send(200),json({
                message:`Time updated for ${req.body.node} successfully`
            })

        } catch (error) {
            res.send(500).json({
                message : "Error setting node session average " + error
            })
        }
    }
}