var express = require('express');

var expressValidator = require('express-validator');
var flash = require('connect-flash');
var session = require('express-session');
var passport = require('passport');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');


var LocalStrategy = require('passport-local').Strategy;

var index = require('./controllers/index');
var users = require('./controllers/users');
var law = require('./controllers/laws');
var politician = require('./controllers/politician-controller');
var voter = require('./controllers/voters');
var voter_votes = require('./controllers/voter_votes');

var app = express();

var User = require("./models/user.js");

// view engine setup
var exphbs = require("express-handlebars");
app.set('view engine', 'hbs');
app.engine("hbs", exphbs({ defaultLayout: "main" }));


app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('node-sass-middleware')({
 src: path.join(__dirname, 'public'),
 dest: path.join(__dirname, 'public'),
 indentedSyntax: true,
 sourceMap: true
}));
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(process.cwd() + "/public"));


// Express session
app.use(session({
    secret: 'asjhdiugc9b0qub031udbd',
    saveUninitialized: true,
    resave: true
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.getUserById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.getUserByUsername(username, function(err, user) {
            if(err) throw err;

            if(!user) {
                return done(null, false, {message: 'Unknown username'});
            }

            User.comparePassword(password, user.Password, function(err, isMatch) {
                if(err) throw err;

                if(isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, {message: 'Invalid password'});
                }
            })
        });
    }
));

// Start passport
app.use(passport.initialize());
app.use(passport.session());

// Express validator
app.use(expressValidator({
    errorFormatter: function(param, msg, value) {
        var namespace = param.split('.')
            , root    = namespace.shift()
            , formParam = root;

        while(namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param : formParam,
            msg   : msg,
            value : value
        };
    }
}));

// Connect flash
app.use(flash());

// Global vars
app.use(function (req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error'); // For passport
    res.locals.user = req.user || null;
    next();
});

// override POST to have DELETE and PUT
app.use(methodOverride('_method'));


app.use('/', index);
app.use('/users', users);
app.use('/laws', law);
app.use('/politicians', politician);
app.use('/voters', voter);
app.use('/voter_votes', voter_votes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

