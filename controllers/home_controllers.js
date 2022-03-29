module.exports.home=function(req,res){
    console.log(req.cookies);
    res.cookie('user_id',25);
    // return res.end('<h1>Hello This is Codeial Page !</h1>');
    return res.render('home', {
        title: 'Home Page'
    })
}
// module.exports.actionName=function(req,res)