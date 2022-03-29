const express=require('express');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');

app.use(express.static('./assets'));

// extract style and scripts from sub page into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use(expressLayouts);
// use express router
// app.get('./route');
app.use('/',require('./route'));
// set up the view engine 
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        // console.log('Error :',err);
         console.log(`Error : ${err}`);
    }
   console.log(`server is running on port:${port}`);
})