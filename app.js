var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

var bodyParser = require('body-parser');
var session = require('express-session');


app.use(session({ secret: 'zz', resave: true, saveUninitialized: true}))
app.use(bodyParser.json());
app.listen(4200);
if(process.env.NODE_ENV === 'production') {
  //serve through nginx
}
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
console.log(__dirname);
app.use(express.static(path.join(__dirname, './public/dist/mean-learning'))); //on production nginx
console.log(path.join(__dirname, './public/dist/'));
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

app.get('/', (req, res) =>{

});
app.get('/description/:id', (req, res) =>{

});
app.get('/workhours', (req, res) =>{

});
app.get('/pricing', (req, res) =>{

})
app.get('/directions', (req, res) =>{

});
app.get('/sidenav', (req, res) =>{

})


app.get('/about', (req, res) =>{

});
// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.listen(1234, _ => console.log('up'));
module.exports = app;
