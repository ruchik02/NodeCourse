const express=require('express');
const app=express();
const port=8000;
// use express router
app.get('./route');
app.listen(port,function(err){
    if(err){
        // console.log('Error :',err);
         console.log(`Error : ${err}`);
    }
   console.log(`server is running on port:${port}`);
})