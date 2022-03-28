const express=require('express');
const router=express.Router(); 
const profileController=require('../controllers/profile_controller');
router.get('/user',profileController.user);

module.exports=router;