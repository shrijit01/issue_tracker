const Project = require('../models/project');
const Issue = require('../models/issue');
const User = require('../models/user');



module.exports.issues = async function(req,res){

    if(req.isAuthenticated()){
        try{
            let foundUser = await User.find();
            let foundIssue = await Issue.find()
            .populate('user')    // Populate the 'user' field
            .populate('project') // Populate the 'project' field
            .exec();

            // console.log(foundIssue);
            return res.render('issuePage',{
                title:"Issue Page",
                foundIssue:foundIssue,
                foundUser:foundUser 
            });

        }catch (err) {
            console.error(err, 'Error in fetching issues');
            return res.status(500).json({ message: 'Error in fetching issues' });
        }
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

            const userToUpdate = await User.findById(req.body.user);

            if(!userToUpdate){
                console.error('User not found');
                return res.status(404).json({ message: 'User not found' });
            }

            userToUpdate.issues.push(createdIssue._id);
            await userToUpdate.save();
            
            const projectToUpdate = await Project.findById(req.body.project);
            // console.log(createdIssue);
            if (!projectToUpdate) {
                console.error('Project not found');
                return res.status(404).json({ message: 'Project not found' });
            }
            
            // Add the created issue to the project's issue array
            projectToUpdate.issues.push(createdIssue._id); // Assuming you're using the issue's _id
            // Save the updated project
            await projectToUpdate.save();
            console.log('Issue created:', createdIssue);
        }
        return res.redirect('back');
    }catch(err){
        console.log(err,'Error in issue creation');
        return res.status(500).json({ message: 'Issue creation failed' });
    }
}