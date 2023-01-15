var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
const dotenv = require("dotenv")
dotenv.config()
const upload = require("express-fileupload");
const session = require('express-session');


// app setup
var app = express();

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var createRouter = require('./routes/create');
var loggedinRouter = require('./routes/loggedinpage');
var loggedRouter = require('./routes/logout');
var allRouter = require('./routes/all');
var formRouter = require('./routes/form');
var formpageRouter = require('./routes/onclickformpage');
var imgupload = require('./routes/imgupload');

// routing
app.use(upload());

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
app.use('/form', ifNotLoggedin, formRouter);
app.use('/onclickformpage', ifNotLoggedin, formpageRouter);
app.use('/imgupload', ifNotLoggedin, imgupload);

// this should be modulated but use of req.files is malfunctioning so it is here in the root
app.post('/img', ifNotLoggedin, (req, res) => {
    if (req.files) {
        // console.log(req.files)
        try {
            console.log('In file request')
            // console.log(req.files);
        
            const image = req.files.file;
            console.log(image.name);
        
            // If no image submitted, exit
            if (!image) {
                res.setHeader("Status", 400);
            }
            else {
                let lat = req.body.lat;
                if (!lat){
                  res.sendStatus(400);
                  throw error
                }
                console.log(`lat ${lat}`)
                let lng = req.body.lng;
                if (!lng){
                  res.sendStatus(400);
                  throw error
                }
                // Move the uploaded image to our upload folder
                let ext = path.extname(image.name);
                let name = String(lat) + String(lng) + ext;

                if (path.extname(name) != '.png' && path.extname(name) != '.jpg') {
                    console.log('Invalid filetype')
                    res.setHeader("Status", 400);
                } else {
                    image.mv('./upload/' + name, function(err) {
                        if (err) {
                            console.log(err)
                        } else {
                            console.log('Success!')
                        }
                    });
                    // All good
                    console.log('Image saved!')
                    res.setHeader("Status", 200);
                }
              }
          } catch (e) {
            console.log(`Error dealing with the image ${e}`);
          }
    }
})

module.exports = app;
