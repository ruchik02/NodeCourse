const express=require('express');
const app=express();
const port=3000;

app.get('/',(req,res)=>{
   res.send("Hello World");
});
app.get('/about',(req,res)=>{
    res.send("Hello About");
 });
 app.get('/home',(req,res)=>{
    res.send("Hello home");
 });
 app.get('/contact',(req,res)=>{
    res.send("Hello contact");
 });

app.listen(port,(req,res)=>{
    console.log("listening to the port",port);
})