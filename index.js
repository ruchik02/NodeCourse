const fs=require('fs');
fs.writeFile('read.txt',"today is an awesome day",(err)=>{
    console.log('files is created');
    console.log(err);
});