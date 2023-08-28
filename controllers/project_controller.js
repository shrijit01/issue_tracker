const Project = require('../models/project');
const Issue = require('../models/issue');



module.exports.show = async function (req, res) {
    if (req.isAuthenticated()) {
        try{
            let foundedProject = await Project.findById(req.params.id)
                .populate('issues')
                .exec();

            if (!foundedProject) {
                return res.status(404).json({ message: 'Project not found' });
            }

            //Fetching the issue related to the one project
            const relatedProjects = await Project.find({ relatedProjects: foundedProject._id });
            const projectIds = [foundedProject._id, ...relatedProjects.map(project => project._id)];

            const allIssues = await Issue.find({ project: { $in: projectIds } });

            return res.render('showProject', {
                title: "showProject",
                project: foundedProject,
                issues:allIssues,
            });
        } catch (err) {
            console.error(err, 'Error in showing project');
            return res.status(500).json({ message: 'Error in showing project' });
        }
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