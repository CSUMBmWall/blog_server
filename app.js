var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var youTube = require('./routes/youTubeService');
var youTubeDL = require('./routes/youTubeDL');
var elastic = require('./routes/elasticService');
var ytAuth = require('./oAuth');
var app = express();

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

/*app.use(app.router);*/
app.use(express.static(path.join(__dirname, 'public')));

app.get("/api/youTube", getYouTubeInfo);
app.get("/api/youTubeDL", getYouTubeDLInfo);
/*app.use("/api/oath", ytAuth);*/
app.get('*',  function(req, res) {
   res.redirect('/');
});



/*app.use('/', index);
app.use('/users', users);*/

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send('error');
});



function getYouTubeInfo(req, res) {
    var ytLink = req.query.id;
    youTube.getYouTubeInfo(req, res, ytLink, process.env.YT);
};

function getYouTubeDLInfo(req, res) {
    var ytLink = req.query.url;
    console.log('ytLink', ytLink);
    youTubeDL.getYouTubeDLInfo(req, res, ytLink);
};

module.exports = app;
