let mongoose = require('mongoose')
let Schema = mongoose.Schema

let postSchema = new Schema({
  creator:{
    type : Schema.Types.ObjectId,
    ref : 'User'
  },
  post : String
},{timestamps:{ }})

let postModel = mongoose.model('Post',postSchema)
module.exports = postModel