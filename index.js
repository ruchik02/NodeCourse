const fs=require('fs');
// fs.writeFile('read.txt',"today is an awesome day",(err)=>{
//     console.log('files is created');
//     console.log(err);
//     // A callback function is a function passed into another function as an argument .
// });
// fs.appendFile('read.txt' ," i love my self and believe in myself ",()=>{
// console.log('task completed');
// });

fs.readFile('read.txt',(err,data)=>{
   console.log(data);
})
