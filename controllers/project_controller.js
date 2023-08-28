const Project = require('../models/project');



module.exports.show = async function(req,res){
    // if(req.isAuthenticated()){
        let foundedProject = await Project.findById(req.params.id)
        // .populate('Project');
        console.log(foundedProject);
        // console.log(req.params.id);
        return res.render('showProject',{
            title:"showProject",
            project:foundedProject
        });
    // }    
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