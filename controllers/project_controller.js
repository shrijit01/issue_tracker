const Project = require('../models/project');



module.exports.createProjectPage = function(req,res){
    return res.render('createProject',{
        title:"create Project"
    });
}


module.exports.create = async function(req,res){
    try{
        let createdProject = await Project.create({
            name : req.body.name,
            description : req.body.description,
            author : req.body.author,
            user : req.user._id
        })

        if(createdProject){
            return res.redirect('/');
        }
    }catch(e){
        console.log(Error);
    }
}