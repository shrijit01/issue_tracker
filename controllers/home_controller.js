const Project = require('../models/project');

/* THIS CONTROLLER WILL HANDLE HOME PAGE */
module.exports.home = async function(req,res){
    let foundProject = await Project.find({})
    return res.render("index",{
        title:"Issue Tracker",
        foundProject:foundProject
    });
}

