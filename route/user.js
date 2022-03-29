const express = require('express');
const router = express.Router();

const usersController = require('../controllers/user_controllers');

router.get('/profile', usersController.profile);
router.get('/sign-in',usersController.SignIn);
router.get('/sign-up',usersController.SignUp);
router.post('/create',usersController.create);
router.post('/create-session',usersController.createSession);

module.exports = router;