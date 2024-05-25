console.log('hey');
console.log('hue hue hue');
console.log(a);
var a=47;
var b=7;
//console.log(a+b);
//var add = (a,b) => {return a+b}
(function(){console.log("ajhdgjh")})

function callback()
{
    console.log('hello there');
}

var z = function addd(a,b,callback)
{
    /*var s= a+b;
    console.log(s);
    */
   console.log(a+b);
    callback();
}
z(a,b,callback);
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const Person = require('./models/person');
const db = require ('./db');

const personroutes = require('./routes/personroutes');

//use routers
app.use('/person', personroutes);

var os = require('os');
var fs = require('fs');


var user;
console.log(os.userInfo(user));
//console.log(user);
//console.log(user.username);



//post method


app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/sg', (req, res)=>{
    res.send('i!')
  })

  app.get('/sg1', (req, res)=>{
    res.send('hi!')
  })

app.listen(3000, ()=>{
    console.log('server running on 3000');
})


