const http=require('http'); //protocol
const date=require('./basic');// protocol date
const port=4000; // port
const url=require('url');
const fs=require('fs');
function myFirst(req,res ){ // function
    fs.readFile('index1.html',
    function(err,data){
        res.writeHead(200,{'Content-type':'text/html'});
        let filePath;
        switch(req.url){
            case '/':
                filePath='./index.html'
                break;
                case '/profile':
                    filePath='./profile.html'
                    break;
                default :
                filePath='./pageNotAvaiable.html'
        }
        // res.write(req.url);
        // res.write("<h2>Hello Buddy</h2>");
        fs.readFile(filePath,function(err,data){
            if(err){
                console.log(err);
                return res.end('<p>Error</p>')
            }
        })
        // res.write(data);
        return res.end(data);
    })
    // in this there are two argument status and message status 
    // like 200 and message is content type is and the file name is text/html all this things
    // res.write("<h1 style='color:red'>Hello Node</h1>"+date.myDate());
     //response
      // jo bhi url mai dalte hain vo show hot hain 
     //end
}
const server=http.createServer(myFirst); //create server 
//127.0.0.01==localhost:8000

server.listen(port,function(err){
    if(err){
        console.log("Error in server");  // if true then error in server will print
        return;
    }
    console.log("server is on port",port); // otherwise this will print
})