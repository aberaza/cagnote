var router = require('express').Router();

var User = require('../models/user.js');

router.get('/login', function(req,res,next) {
});

router.get('/signin', function(req,res,next) {
});

router.get('/:userid', function(req, res, next){
    next();
});

router.get('/:userid', function(req, res){
    res.end();
});

// API METHODS

router.post('/api/login', function(req, res) {
    User.find("someid", function(err, user){
        if(user){
            if(user.authenticate("somepassword")){
                req.user = user;
                next();
            }
        }
        next(new Error("Username or password incorrect"));
    });
});

router.post('/api/login', function(req, res) {
});

router.get('/api/:userid', function(req, res) {
});
