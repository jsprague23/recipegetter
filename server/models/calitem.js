var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'CalItem'



var schema = new Schema({
  UserId: {type: ObjectId, ref: 'User', required: true},
  description: {type: String, required: true},
  isComplete: {type: Boolean, default: false},
  dates: {type: String, required: true},
})



module.exports = mongoose.model(schemaName, schema)