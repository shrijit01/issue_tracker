const Project = require('../models/project');
const Issue = require('../models/issue');



module.exports.issues = function(req,res){
    return res.render('issuePage',{
        title:"issue Page"
    });
}