let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let bcrypt = require('bcryptjs')
let schemaName = 'User'
const SALT = 10

let schema = new Schema({
  userName: { type: String, required: true, unique: true},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  created: { type: Number, required: true, default: Date.now() },
  favorites: [{type: ObjectId, ref: 'Recipe'}]
})

schema.statics.generateHash = function (password) {
  return bcrypt.hashSync(password, SALT)
}

schema.methods.validatePassword = function (password) {
  return bcrypt.compare(password, this.password)
}


module.exports = mongoose.model('User', schema)