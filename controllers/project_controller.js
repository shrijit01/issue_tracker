const Project = require('../models/project');
const Issue = require('../models/issue');



// module.exports.issues = async function(req,res){

//     if(req.isAuthenticated()){
//         let foundIssue = await Issue.find();

//         return res.render('issuePage',{
//             title:"issue Page",
//             foundIssue:foundIssue   
//         });
//     }
//     return res.redirect('/users/sign-in');
// }


module.exports.show = async function(req,res){
    if(req.isAuthenticated()){
        let foundedProject = await Project.findById(req.params.id);

        let foundedIssue =  foundedProject.issues;
        console.log(foundedIssue);
        
        return res.render('showProject',{
            title:"showProject",
            project:foundedProject
        });
    }    
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