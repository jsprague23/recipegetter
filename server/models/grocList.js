var mongoose = require('mongoose')
var ObjectId = Schema.Types.ObjectId
var Schema = mongoose.Schema
var schemaName = 'grocList'


var itmeSchema = new Schema({
  ingrediantId: {type: String, required: true},
  originalString: {type: String, required: true},
  checked: {type: Boolean, default: false}
})
var grocList = new Schema({
title:{type: String, required: true},
userId: {type: ObjectId, required:true},
item: [itmeSchema]
})

module.exports = mongoose.model(schemaName, schema)