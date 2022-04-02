const http=require('http');

const port=process.env.PORT || 8000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
      res.setHeader('Content-Type','text/html');
    if(req.url=='/'){
        res.statusCode=200;
        res.end('<h1>Hello everyone</h1> <p>this is para</p>');
    }
    else  if(req.url=='/about'){
        res.statusCode=200;
        res.end('<h1>Hey!</h1>');
    }
    else{
        res.statusCode=404;
        res.end('<h1>Page is not found</h1>');
    }
  
   
})
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});