const express=require('express');
const app=express();
const port=8000;
app.listen(port,function(){
    if(err){
        console.log('Error :',err);
        console.log(`Error : ${err}`);
    }
   console.log(`server is running on port:${port}`);
})