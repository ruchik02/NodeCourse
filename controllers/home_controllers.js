module.exports.home=function(req,res){
    // return res.end('<h1>Hello This is Codeial Page !</h1>');
    return res.render('home', {
        title: 'Home Page'
    })
}
// module.exports.actionName=function(req,res)