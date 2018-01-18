let mongoose = require('mongoose')
let Schema = mongoose.Schema 

let userSchema = new Schema({
  email : String,
  password : String,
  profileImg:String,
  username : String
},{timestamps:{ }})
let userModel = mongoose.model('user',userSchema)

module.exports = userModel