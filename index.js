// to create a webserver we use http.createserver()
// which inlcudes request and response parameters
const http=require('http');
const port=8000;
// request object can be used to get a information about the current http request
// eg :url, req header and data. 
const server=http.createServer((req,res)=>{
    return res.end('hello from other side');
});
server.listen(port,'127.0.0.1',()=>{
    console.log('listening to the port : ',port);
})