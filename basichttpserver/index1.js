//require the express
const express = require('express'); 
// path 
const path = require('path');
// port 
const port = 6000;
// connect to database
const db = require('./config/mongoose');
const Contact=require('./modals/contact');
// app through express is work
const app = express();
// set engine
app.set('view engine', 'ejs');
// set directory
app.set('views', path.join(__dirname, 'views'));
//only used for forms
app.use(express.urlencoded());
//
app.use(express.static('assets'));


// array
var contactList = [
    {
        name: "Arpan",
        phone: "1111111111"
    },
    {
        name: "Tony Stark",
        phone: "1234567890"
    },
    {
        name: "Coding Ninjas",
        phone: "12131321321"
    }
]
// to get this route and controller
app.get('/practice', function(req, res){
    return res.render('practice', {
        title: "Let us play with ejs"
    });
});

// route and controller
app.get('/', function(req, res){

    return res.render('home',{
        title: "Contact List",
        contact_list: contactList
    });
})
// post is used for private data and it can't show to anyone
app.post('/create-contact', function(req, res){
    
    // contactList.push(req.body);
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
    // return res.redirect('/');

});
// if sucess port is run otherwise error come
app.listen(port, function(err){
    if (err) {
        console.log("Error in running the server", err);
    }
    console.log('Yup!My Server is running on Port', port);
})

// delete contact
app.get('/delete-contact/', function(req, res){
    console.log(req.query);
    let phone = req.query.phone

    let contactindex = contactList.findIndex(contact => contact.phone == phone);

    if(contactindex != -1){
        contactList.splice(contactindex, 1);
    }

    return res.redirect('back');
});
