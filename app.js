var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
// var passport = require('passport');
// var flash = require('connect-flash');
// var bodyParser = require('body-parser');

//Mongoose
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('conectado!');
});

var app = express();

app.use(session({
    secret: 'palabraClave',
    resave: false,
    saveUninitialized: true,
    name: 'Mi_Cookie',
    cookie: {maxAge: 100000}
}));

// settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(bodyParser.urlencoded({extended: false}));
// app.use(passport.initialize());
// app.use(passport.session());
// app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));

var myLogger = function (req, res, next) {
  console.log('LOGGED');
  next();
};
  
var validation = function (req, res, next) {
    if(req.session.email){
      next();    
    }else{
      res.redirect('/signup');
    }
};

// middlewares

// routes
app.use(myLogger);
app.use(require('./routes/signup'));

app.use(validation);

app.use(require('./routes/index'));
app.use(require('./routes/login'));
// app.use(require('./config/passport')(passport));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});
  
// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
