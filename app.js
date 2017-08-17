var path = require('path');
var express = require('express');
var fs = require('fs');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var bodyParser = require('body-parser');
var nconf = require ('nconf');
var auth = require('./config.json');

const port = process.env.PORT || 8000;

var index = require('./routes/index');

const app = express();
var server = require('http').createServer(app);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(__dirname + '/src'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

var accessLogStream = fs.createWriteStream(__dirname + '/access.log', { flags: 'a' });
app.use(logger('dev'));
app.use(logger('combined', { stream: accessLogStream}));

// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//
//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.get('/', (req,res)=> {
  res.json({message: "Hello, welcome to our api!"});
  res.sendFile(path.join(__dirname +'/src/index.js'));
  }
);

//handle contact form POST data
app.post('/contact',(req,res)=>{
  var name = req.body.name;
  var email = req.body.email;
  var phone = req.body.phone;
  var participant = req.body.participant;
  var mentor = req.body.mentor;
  var instructor = req.body.instructor;
  var comment = email+" "+phone+' '+' This is what I am interested in: '+ participant+' '+instructor+' '+mentor;
  var isError = false;

  if(name) {
    isError = true;
  }
  console.log('\nCONTACT FORM DATA: '+ name + ' '+email + ' '+ comment+'\n');

  var transporter = nodemailer.createTransport(mg(auth));

  var mailOptions = {
    from: 'brigitta@brigittalee.com',
    to: 'baltwo@gmail.com',
    subject: 'Message from GRIT contact form',
    text: 'My name is '+name+' and I am interested in GRIT. Here is my contact information: '+comment,
    err: isError,
  };

  transporter.sendMail(mailOptions, (error, info)=> {
    if (error) {
      console.log('\nError: ' + error+'\n');
    } else {
      console.log('\nRESPONSE SENT: ' + info.response+'\n');
    }

  })  ;
});

app.listen(port,()=>console.log('listening on http://localhost:'+ port));

module.exports = app;
