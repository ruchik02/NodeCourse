const http=require('http');
const port=6600;
const url=require('url');
const fs=require('fs');
function myFirst(req,res){
    var q=url.parse(req.url,true);
    console.log("fileName",q.pathname);
    let filePath='.'+q.pathname +'.html';
    fs.readFile(filePath,function(err,data){
        if(err){
            res.writeHead(404,{'Content-Type':'text/html'});
            return res.end("404 not found");
        }
        res.writeHead(200,{'Content-Type':'text/html'});
        return res.end(data);
    })

}
const server=http.createServer(myFirst);
server.listen(port,function(err){
    if(err){
        console.log("Error in server");
        return ;
    }
    console.log("server is on port",port);
})