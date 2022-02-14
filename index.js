const fs=require('fs');
fs.mkdir('thapas',(err)=>{
console.log("folder is created");
})
// fs.writeFile('bio.txt',"hello, i'm ruchika sharma",(err,data)=>{
//     console.log("task completed");
// })

fs.writeFile('./thapas/bio.txt',"hello,how are you ?",(err)=>{
    console.log("file is created");
})