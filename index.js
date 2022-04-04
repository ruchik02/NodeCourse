const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.write("<h1>Hello world</h1>");
    res.write("<p>Hello</p>");
   res.send();
});
app.get('/about',(req,res)=>{
    res.send("Hello About");
 });
 app.get('/home',(req,res)=>{
    res.send("Hello home");
 });
 app.get('/contact',(req,res)=>{
    res.json([
        {
            id:1911981325,
            name:"Ruchika"
        },
        {
            id:1911981381,
            name:"Anushka"
        },
        {
            id:1911981381,
            name:"samridhi"
        }
    ]);
 });

app.listen(port,(req,res)=>{
    console.log("listening to the port",port);
})