var mongoose = require('mongoose')
var Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
var schemaName = 'grocList'


var grocList = new Schema({
title:{type: String, required: true},
userId: {type: ObjectId, ref: 'User', required:true},
items: [{type:String}],
date: {type: String, required: true, default: Date.now()}
})

module.exports = mongoose.model(schemaName, grocList)