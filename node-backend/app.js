var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
const dotenv = require("dotenv")
dotenv.config()
const session = require('express-session');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createRouter = require('./routes/create');
var loggedinRouter = require('./routes/loggedin');
var loggedRouter = require('./routes/logout');
var allRouter = require('./routes/all');
var formRouter = require('./routes/form');

// app setup
var app = express();

// routing
app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true,
    isLoggedIn: false
}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public'))

const ifNotLoggedin = (req, res, next) => {
    if (!req.session.username || !req.session.userid){
        return res.redirect('/');
    }
    next();
}

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/create', createRouter)
app.use('/loggedin', ifNotLoggedin, loggedinRouter);
app.use('/logout', loggedRouter);
app.use('/all', allRouter);
app.use('/from', formRouter);

module.exports = app;
