const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport');

app.use(express.urlencoded());
app.use(cookieParser());
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