const fs=require('fs');
// fs.mkdir('thapas',(err)=>{
// console.log("folder is created");
// })
// fs.writeFile('bio.txt',"hello, i'm ruchika sharma",(err,data)=>{
//     console.log("task completed");
// })

// fs.writeFile('./thapas/bio.txt',"hello,how are you ?",(err)=>{
//     console.log("file is created");
// })

// fs.appendFile('./thapas/bio.txt'," yeah i'm good what about you ?",()=>{
//     console.log('append file');
// })

// fs.readFile('./thapas/bio.txt','utf-8',(err,data)=>{
//     console.log(data);
// })
// fs.rename('./thapas/bio.txt','./thapas/mybio.txt',(err)=>{
//     console.log('rename file');
// });
fs.unlink('./thapas/mybio.txt',(err)=>{
console.log('file deletion');
})