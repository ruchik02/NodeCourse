const User=require('../models/users');
module.exports.profile=function(req,res){
    // return res.end('<h1>User Profile</h1>');
    return res.render('user', {
        title: 'User Profile'
    })
}
// render sign in page
module.exports.SignIn=function(req,res){
    return res.render('signIn',{
        title:'codeial | SignIn'
    })
}
// render sign up page
module.exports.SignUp=function(req,res){
    return res.render('signUp',{
        title:'codeial | SignUp'
    })
}
// get the sign up Data
module.exports.create=function(req,res){
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email},function(err,user){
        if(err){
            console.log('error in finding user in signing up');
            return;
        }
        if(!user){
            User.create(req.body,function(err,user){
                if(err){
                    console.log('error in creating user while signing up');
                    return;
                }
               return res.redirect('/user/sign-in');
            })
        }else{
            return res.redirect('back');
        }
    })
    // todo later
}
// get the sign up data

// sign and create a session for the user
module.exports.createSession=function(req,res){
    // todo later
}