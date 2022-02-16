// to create a webserver we use http.createserver()
// which inlcudes request and response parameters
// const { type } = require('express/lib/response');
const http=require('http');
const fs=require('fs');
const port=8000;
// request object can be used to get a information about the current http request
// eg :url, req header and data. 
const server=http.createServer((req,res)=>{
    // console.log(req.url);
   const data= fs.readFileSync(`${__dirname}/UserApi/userapi.json`,"utf-8");
      const objData=JSON.parse(data);

    if(req.url=='/'){
        return res.end('hello from home page');
    }
    else if(req.url=='/about'){
        return res.end('hello from about page !');
    }
    else if(req.url=='/contact'){
        return res.end('hello from contact page');
    } 
     else if(req.url=='/userapi'){
         res.writeHead(200,{"content-type":"application/json"})
       return res.end(objData[2].phone);
    }else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end('404 error occur page does not exist');
    }
});
server.listen(port,'127.0.0.1',()=>{
    console.log('listening to the port : ',port);
})