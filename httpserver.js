const http=require('http');

const port=process.env.PORT || 8000;

const server=http.createServer((req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    res.end('<h1>Hello everyone</h1> <p>this is para</p>');
})
server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});