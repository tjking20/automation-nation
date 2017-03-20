var express = require('express');
var router = express.Router();
var models = require("../models");

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var passportConfig = require('../config/passport').config;
var auth = require('../helpers/auth');

var User = require('../models/user');

// Register
router.get('/register', function(req, res, next) {
    res.render('user/register');
});

// Register user
router.post('/register', function(req, res, next) {
    // var name = req.body.name;
    // var email = req.body.email;
    // var username = req.body.username;
    // var password = req.body.password;
    // var cPassword = req.body.cpassword; // Confirm password

    // Validation
    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('username', 'Username is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('cpassword', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();

    if(errors) {
        res.render('user/register', {
            errors: errors
        })
    } else {
        models.user.create({
            user_name: req.body.name,
            user_id: req.body.username,
            user_password: req.body.password,
            user_role: 1,
            user_email: req.body.email,
            user_session: 'SESSION1'
        }).then(function() {
            req.flash('Success_msg', 'You are now registered and can login to your account.');
            res.redirect('/users/login');
        }).catch(function(err) {
          res.json(err);
        });


    }
});

// Login
router.get('/login', function(req, res, next) {
    res.render('user/login');
});

// Login POST
router.post('/login', passport.authenticate('local', passportConfig), function(req, res) {
    res.redirect('/voters');
});

// Logout the user
router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success_msg', 'You are now logged out');
    res.redirect('/users/login');
});

router.get('/test', auth.isAuthenticated, function(req, res) {
    req.flash('success_msg', 'Worked');
    res.redirect('/users/login');
});

module.exports = router;
