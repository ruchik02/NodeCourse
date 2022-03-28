module.exports.user=function(req,res){
    // return res.end('<h1>Hello Profile here !</h1>');
    return res.render('profile', {
        title: 'Profile user'
    })
}