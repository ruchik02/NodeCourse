const path=require('path');
const express=require('express');
const app=express();
const port=3000;
 const staticPath=path.join(__dirname,'../public');

// builtin middleware
// app.use(express.static(staticPath));

// to set the view engine 
app.set('view engine', 'hbs');

app.get('',(req,res)=>{
    res.render('index',{
        title:"dynamic website"
    });
});


app.listen(port,(req,res)=>{
    console.log("listening to the port",port);
})