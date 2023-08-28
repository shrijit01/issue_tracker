const Project = require('../models/project');
const Issue = require('../models/issue');



module.exports.issues = async function(req,res){

    if(req.isAuthenticated()){
        let foundIssue = await Issue.find();

        return res.render('issuePage',{
            title:"issue Page",
            foundIssue:foundIssue   
        });
    }
    return res.redirect('/users/sign-in');
}

module.exports.create = async function(req,res){
    try{
        let createdIssue = await Issue.create(
            {
                title:req.body.title,
                description:req.body.description,
                label:req.body.label,
                author:req.body.author,
                project:req.body.project,
                user:req.body.user
            }
        )

        if(createdIssue){
            console.log(createdIssue);
        }
        return res.redirect('back');
    }catch(err){
        console.log(err,'Error in issue creation');
    }
}