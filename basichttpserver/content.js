const express=require('express');
const path=require('path');
const port=3300;
const app=express();

const db = require('./config/mongoose');
const Contact=require('./modals/contact');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
var contactList=[
  {
    name:'ruchika',
    phone:'8221820300'
  },
  {
    name:'kritika',
    phone:'9255585995'
  },
  {
    name:'payal',
    phone:'9588762856'
  }
]
app.use(express.urlencoded()); // only read phone params
//middleware-1
// app.use(function(req,res,next){
//   req.myName="rui";
//  // console.log('middleware 1 is called');
//   next();
// })
// app.use(function(req,res,next){
//   console.log("My name from MW2",req.myName);
//  // console.log("middleware 2 is called ");
//   next();
// })
// app.use(function(req, res, next){
//   console.log('middleware 1 called');
//   });
 
//  app.use(function(req, res, next){    
//       console.log('middleware 2 called');
//       next();
//  });
 
//  app.use(function(req, res, next){    
//       console.log('middleware 3 called');
//       next();
//  });

app.use(express.static('assets'));
app.get('/',function (req,res) {
    // console.log(req);
    // res.send("cool,it is running or is it ?");
    return res.render('home',
    {name:'Ruchika Sharma',
    college:'Chitkara University',
    Batch:'2019',
    Email:'ruchikasharma.cse19@chitkarauniversity.edu.in'
});    
});
// app.get('/delete-contact/:phone',function(req,res){
//   console.log(req.params);
//   let phone= req.params.phone;
// })

// for deleting a contact
app.get('/delete-contact/',function(req,res){
  
  // console.log(req.query);
  // get the id from query in the url
  // let phone= req.query.phone;
  let id=req.query.id;
// find the contact in the database using id and delete 
Contact.findOneAndDelete(id,function(err){
     if(err){
       console.log("Error from deleting the database ");
       return;
     }
})
  // let contactIndex=contactList.findIndex(contact=>contact.phone==phone);
  // if(contactIndex!=-1){
  //   contactList.splice(contactIndex,1);
  // }
  
    return res.redirect('back');
});
app.post('/create-contacts',function(req,res){
  // console.log(req.body);
  // console.log(req.body.name);
  // return res.redirect('/pratice');
  // contactList.push({
  //   name:req.body.name,
  //   phone:req.body.phone
  // });
  // contactList.push(req.body);
  // // return res.redirect('/contacts');
  // return res.redirect('back');
  Contact.create({
    name:req.body.name,
    phone:req.body.phone
},function(err,newContact){
    if(err){
        console.log('error in creating a contact!');
        return;
    }
    console.log("******",newContact);
    return res.redirect('back');
});
});

 app.get('/contacts',function(req,res){

  Contact.find({},function(err,contact){
    if(err){
      console.log("Error in fetching contact from DB");
      return;
    }
    console.log(req.myName);
   return res.render('contacts',
   {contact_List:contact
  });
  })
   
 });
  app.get('/profile',function (req,res) {
    // console.log(req);
    // console.log(__dirname);
    // res.send("Here it is profile");
    // res.send(__dirname+'/profile.html')
    return res.render('profile',{title:"This is profile page"});
  });
  app.get('/pratice',function(req,res){
    return res.render('pratice',{title:'This is a pratice page'})
  });
  
app.listen(port,function(err){
    if(err){
        console.log("error is running the server",err);
        return;
    }
    console.log("yup!,server is running on port",port);
})