

const http=require('http');
const port=8000;
const fs=require('fs');
function requestHandler(req,res){
    console.log(req.url);
    res.writeHead(200,{'content-type':'text/html'});
    fs.readFile('./index.html',function(err,data){
        if(err){
            console.log('error',err);
            // console.log("inside");
            return res.end("<h1>Error</h1>");
        }
        return res.end(data);
        // console.log("outside");
    })
    // res.end("<h1>Gotcha!</h1>");
}
const server=http.createServer(requestHandler);
server.listen(port,function (err) {
    if(err){
        console.log(err);
        return;
    }
    console.log("server is up and running on port :",port);
  });