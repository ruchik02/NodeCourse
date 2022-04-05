const path=require('path');
const express=require('express');
const app=express();
const port=3000;
const hbs=require('hbs');
//  const staticPath=path.join(__dirname,'/public');
 const templatePath=path.join(__dirname,'/templates/view');
 const partialsPath=path.join(__dirname,'/templates/partials');

// builtin middleware
// app.use(express.static(staticPath));

// to set the view engine 
app.set('view engine', 'hbs');
app.set("views", templatePath);
hbs.registerPartials(partialsPath);

app.get('/',(req,res)=>{
    res.render('index',{
        title:"dynamic website"
    });
});

app.get('/about',(req,res)=>{
    res.render('about',{
        title:"About website"
    });
});


app.listen(port,(req,res)=>{
    console.log("listening to the port",port);
})