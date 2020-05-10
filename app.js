var mysql = require('mysql');
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var aboutRouter = require('./routes/about');
var propertyRouter = require('./routes/propertyRouter');
var blogRouter = require('./routes/blogRouter');
var property1Router = require('./routes/property1Router');
var blog1Router = require('./routes/blog1Router');
var agentRouter = require('./routes/agentRouter');
var agent1Router = require('./routes/agent1Router');
var contactRouter = require('./routes/contactRouter');
var loginRouter = require('./routes/loginRouter');
var registrationRouter = require('./routes/registrationRouter');






var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/about', aboutRouter);
app.use('/property', propertyRouter);
app.use('/blog', blogRouter);
app.use('/property1', property1Router);
app.use('/blog1', blog1Router);
app.use('/agent', agentRouter);
app.use('/agent1', agent1Router);
app.use('/contact', contactRouter);
app.use('/login', loginRouter);
app.use('/registration', registrationRouter);








// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
