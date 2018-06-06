var mongoose = require('mongoose')
var connectionString = "mongodb://test:test123@ds016718.mlab.com:16718/myrecipebuilder"
var connection = mongoose.connection


mongoose.connect(connectionString)

connection.on('error', err=>{
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', ()=>{
  console.log('This is ground control to Major Tom')
})