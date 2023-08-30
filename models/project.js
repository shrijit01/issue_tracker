const mongoose = require("mongoose");

/* PROJECT SCHEMA */
const projectSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    //include the aray of id of all comments in this post schema itself
    issues:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'Issue'
        }
    ]
},{
    timestamps:true
});

const Project = mongoose.model('Project',projectSchema);

module.exports = Project;