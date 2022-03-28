// const express=require('express');

// const router=express.Router();
// const homeController=require('../controllers/home_controllers');

// console.log('router loaded');

// router.get('/',homeController.home);
// router.use('/user',require('./user'));

// module.exports=router;


const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controllers');

console.log('router loaded');


router.get('/', homeController.home);
router.use('/user', require('./user'));

// for anty further routes, access from here
// router.use('/routerName', require('./routerfile));


module.exports = router;