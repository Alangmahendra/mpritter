const Model = require('../models/post')

class Post{
  static findAll(req,res){
    Model.find({}).populate('creator').exec((err,rows)=>{
      if(err){
        res.status(500).json({message : err})
      }else {
        res.status(200).json({message : 'all post by all user',data:rows})
      }
    })
  }

  static add(req,res){
    let obj = {
      post : req.body.post
    }
    Model.create(obj,(err,rows)=>{
      if(err){
        res.status(500).json({message : err})
      }else{
        res.status(200).json({message : 'you add a post',data:rows})
      }
    })
  }

  static remove(req,res){
    Model.findByIdAndRemove(req.params.id,(err,rows)=>{
      if(err){
        res.status(500).json({message : err})
      }else {
        res.status(200).json({message : 'post deleted'})
      }
    })
  }

  static findAllMyPost(req,res){
    Model.find({creator : req.user._id}).populate('creator').exec((err,rows)=>{
      if(err){
        res.status(500).json({message : err})
      }else {
        res.status(200).json({message : 'all post by all user',data:rows})
      }
    })
  }
}

module.exports=Post