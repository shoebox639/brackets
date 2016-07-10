var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var app = express();

app.use((req, res, next) => {
  req.isJson = !/html/.test(req.get('Content-Type'));
  next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/vendor', express.static(path.join(__dirname, 'bower_components')));
app.use('/assets', express.static(path.join(__dirname, 'dist')));

app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));
app.use('/teams', require('./routes/teams'));
app.use('/games', require('./routes/games'));

app.use((req, res, next) => {
  console.log(req.get('Accept'));
  if (/html/.test(req.get('Accept'))) {
    res.render('index');
  }
  else {
    next();
  }
});

// catch 404 and forward to error handler
app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500);
  
  if (req.isJson) {
    res.json({
      error: {
        code: err.code,
        message: err.message
      }
    });
  }
  else {
    next(err);
  }
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => {
    res.render('error', {
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.render('error', {
    error: {
      code: err.code,
      message: err.message,
    }
  });
});



module.exports = app;
