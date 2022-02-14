const http=require('http');
const port=8800;
http.createServer(function(req,res){
    res.write("Hey Node.js");
    return res.end();
}).listen(port,function (err) {
    if(err){
        console.log("Error in server");
        return;
    }
    console.log("server is on port",port);
  });