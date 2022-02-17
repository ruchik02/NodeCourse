const fs=require('fs');
const http=require('http');

const server=http.createServer()
server.on('request',(req,res)=>{
    // var fs=require('fs');
    // fs.readFile('input.txt',function(err,data){
    //     if(err)
    //     console.log(err);
    //    res.end(data.toString());
    // })
     const rstream=fs.createReadStream('input.txt');
     rstream.on('data',(chunkdata)=>{
        res.write(chunkdata);
     });
     rstream.on('end',()=>{
         res.end();
     })
     rstream.on('error',(err)=>{
         console.log(err);
         res.end('file not found');
     })
})
server.listen(8000,"127.0.0.1",()=>{
    console.log('listening to the port : 8000');
})