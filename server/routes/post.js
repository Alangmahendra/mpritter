const express = require('express')
const router = express.Router()
const Post = require('../controller/post')
const auth = require('../auth/auth')

router.get('/',Post.findAll)
router.get('/:id',Post.findOne)
router.post('/',auth.isLogin,Post.add)
router.get('/mypost',auth.isLogin,Post.findAllMyPost)
router.delete('/:id',auth.isLogin,Post.remove)
module.exports=router