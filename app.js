let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');
// database setup
let mongoose = require('mongoose');
let DB = require('./config/db');

mongoose.connect(DB.URI, { useNewUrlParser: true, useUnifiedTopology: true });

let mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'connection error..'));
mongoDB.once('open', () => {
    console.log('connceted to mongoDB...');
});

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');
let userRouter = require('./routes/user');



let app = express();
app.listen(3000, function() {
    console.log("Server is running on port " + 3000);
});
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/user-list', userRouter);



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