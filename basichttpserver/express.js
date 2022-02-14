const http=require('http');
const port=3000;
const express=require('express');
const url=require('url');
const fs=require('fs');
const app=express();
app.get('/',function(req,res){
    return res.send('<h1>Hey Express</h1>');
})
app.get('/profile',function(req,res){
    return res.send("<h3>My Profile</h3>");
})
app.get('/ruchika',function (req,res) {
    return res.send("<h2>Hello ruchika</h2>");
  })
app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("server is running port",port);
})
//get post patch delete