const fs=require('fs');
// const data=fs.readFileSync('read.txt','UTF-8');
// console.log(data);
fs.readFile('read.txt','utf-8',(err,data)=>{
   console.log(data);
})
console.log("after the data");