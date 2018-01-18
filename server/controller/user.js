const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
require('dotenv').config()

const Model = require('../models/user')

class User{
  static signup(req,res){
    Model.findOne({email : req.body.email},(err,rows)=>{
      if(rows){
        console.log('email sudah terdaftar')
      }else {
        bcrypt.genSalt(10,function(err,salt){
          bcrypt.hash(req.body.password,salt,(err,hash)=>{
            let obj={
              email : req.body.email,
              password : req.body.password
            }
            Model.create(obj,function(err,rows){
              if(err){
                res.status(500).json({message : err})
              }else {
                res.status(200).json({message : 'terdaftar',data : rows})
              }
            })
          })
        })
      }
    })
  }

  static signin(req,res){
    Model.findOne({email : req.body.email},(err,user)=>{
      if(err){
        res.status(500).json({message : err})
      }else {
        bcrypt.compare(req.body.password,user.password,function(err,data){
          if(!err){
            let payload={
              _id : user._id,
              email : user.email
            }
            jwt.sign(payload,process.env.SECRET_KEY,(err,token)=>{
              if(err){
                res.status(500).json({message : err})
              } else {
                res.status(200).json({message : 'masuk',token : token})
              }
            })
          }
        }) 
      }
    })
  }

  static edit(req,res){
    let obj ={
      profileImg : req.file.cloudStoragePublicUrl,
      username : req.username
    }
    Model.findByIdAndUpdate(req.user._id,obj,(err,rows)=>{
      if(err){
        res.status(500).json({message : err})
      } else {
        res.status(200).json({message: 'data terupdate',data : rows})
      }
    })
  }


}

module.exports = User