let mongoose = require('mongoose')
let Schema = mongoose.Schema

let post = new Schema({
  creator:{
    type : Schema.Types.ObjectId,
    ref : 'User'
  },
  post : String
},{timestamps:{ }})

