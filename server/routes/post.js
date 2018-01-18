const express = require('express')
const router = express.Router()
const Post = require('../controller/post')
const auth = require('../auth/auth')

router.get('/',Post.findAll)
router.get('/:id',Post.findOne)
router.get('/allmy',auth.isLogin,Post.findAllMyPost)
router.post('/',auth.isLogin,Post.add)
router.delete('/:id',auth.isLogin,Post.remove)
module.exports=router