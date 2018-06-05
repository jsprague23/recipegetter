var express = require('express')
var bp = require('body-parser')
var app = express()
let server = require('http').createServer(app)
var cors = require('cors')
var port = 3000




//Fire up database connection
require('./db')


var whitelist = ['http://localhost:8080',]
var corsOptions = {
  origin: function (origin, callback) {
    var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true
};
app.use(cors(corsOptions))



//Catch All
app.get('*', (req, res, next)=>{
  res.status(404).send({error: 'No matching routes'})
})

//port listener
app.listen(port, ()=>{
  console.log('server running on port', port)
})