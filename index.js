// to create a webserver we use http.createserver()
// which inlcudes request and response parameters
const { type } = require('express/lib/response');
const http=require('http');
const port=8000;
// request object can be used to get a information about the current http request
// eg :url, req header and data. 
const server=http.createServer((req,res)=>{
    // console.log(req.url);
    if(req.url=='/'){
        return res.end('hello from home page');
    }
    else if(req.url=='/about'){
        return res.end('hello from about page !');
    }
    else if(req.url=='/contact'){
        return res.end('hello from contact page');
    }else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end('404 error occur page does not exist');
    }
});
server.listen(port,'127.0.0.1',()=>{
    console.log('listening to the port : ',port);
})