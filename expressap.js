const express = require('express')
const app = express()
const path = require('path')
const port = 3000;
// const ruchiMiddleware=(res,req,next)=>{
// console.log(req);
// next();
// }
// express middleware
app.use(express.static(path.join(__dirname,"public")));
// app.use(ruchiMiddleware);

app.get('/', (req, res) => {
  res.send('Hello World!');
})
app.get('/about/:name',(req,res)=>{
    res.send('Hello Everyone!' + req.params.name);
})
app.get('/sending',(req,res)=>{
     res.send('This is send page');
})
app.get('/sendings',(req,res)=>{
  // res.sendFile(path.join(__dirname,'index.html'));
  // res.status(500);
  res.json({
    "Ruchika":34
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})