const mongoose = require('mongoose');

const issueSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    label:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    //comment belongs to user
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    project:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project"
    }
},{
    timestamps:true
});


const Issue = mongoose.model('Issue',issueSchema);

module.exports = Issue;