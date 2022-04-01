const fs = require('fs'); 
fs.writeFile('file2.txt',"Ruchika Sharma" ,()=>{
    console.log("Written File is there");
})
console.log("Finished file is there");
const a=fs.writeFileSync('file1.txt',"Hello World");
console.log(a);
