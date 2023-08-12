const User = require('../models/user');

module.exports.profile = function(req,res){
    if(req.isAuthenticated()){
        return res.render('profile',{
            title :"Profile"
        });
    }
    return res.redirect('/users/sign-in');
}


module.exports.signUp = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('signup',{
        title :"Sign Up"
    });
}



module.exports.signIn = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
    }
    return res.render('signin',{
        title :"Sign In"
    });
}

module.exports.createUser = async function(req,res){
    try{
        let user = await User.findOne({
            email:req.body.email
        })
        

            if(!user){
                    let createdUser =  await User.create(req.body)
                    console.log('createdUser',createdUser);
                    return res.redirect('/users/sign-in');
            }
            return res.redirect('back');
    }catch(e){
        console.log(error,'error in creating user');
    }
}

module.exports.createSession = function(req,res){
    //TODO later
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout(function(err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
}