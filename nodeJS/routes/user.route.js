const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/user.controller');

router.post('/createuser', function ( req, res){
    console.log('hiiiii'); 
});

router.get('/user', function ( req, res){
    console.log('hiiiii'); 
    res.send('Success');
});

// router.post('/createuser', usercontroller,usercontroller.saveUser)



module.exports = router;