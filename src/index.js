const path=require('path');
const express=require('express');
const app=express();
const port=3000;
const staticPath=path.join(__dirname,'../public');

// builtin middleware
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    
});


app.listen(port,(req,res)=>{
    console.log("listening to the port",port);
})