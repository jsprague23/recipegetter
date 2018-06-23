var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'grocList'


var itemSchema = new Schema({
  ingrediantId: {type: String, required: true},
  originalString: {type: String, required: true},
  checked: {type: Boolean, default: false}
})
var grocList = new Schema({
title:{type: String, required: true},
userId: {type: ObjectId, ref: 'User', required:true},
item: [itemSchema],
date: {type: String, required: true, default: Date.now()}
})

module.exports = mongoose.model(schemaName, grocList)