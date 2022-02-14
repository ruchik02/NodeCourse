// require the library
const mongoose = require('mongoose');
// connect to database
mongoose.connect('mongodb://localhost:27017/movieDB');
// acquire the connection check if it is successful 
const db = mongoose.connection;
// For Errors
db.on('error', console.error.bind(console,'error in database')); 
// up and running then print the message
db.once('open', function(){
    console.log("Successfully connected to database");
})

