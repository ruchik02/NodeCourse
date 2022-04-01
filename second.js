// console.log("exports :|",exports, "require :",require,"filename :"  ,__filename,__dirname);

// os module 
// const os=require('os');
// console.log(os.freemem());
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.release());

// path module
// const path = require('path');
// console.log(path.basename('C:\\temp\\hello.html'));
// console.log(path.dirname('C:\\temp\\hello.html'));
// console.log(path.extname(__filename));

// file system
const fs = require('fs');
// asynchronous file
// fs.readFile('file.txt','utf8',(err,data)=>{
//     console.log(err,data);
// })
// synchronous file
const a=fs.readFileSync('file.txt','utf-8');
// or another method
const b=fs.readFileSync('file.txt');
console.log(b.toString());
console.log(a);

console.log("Finished reached");


