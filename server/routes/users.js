var express = require('express');
var router = express.Router();

const User = require('../controller/user')
const auth = require('../auth/auth')
const midle = require('../helper/image')

router.post('/signup',User.signup)
router.post('/signin',User.signin)
router.put('/editprofile',auth.isLogin,midle.multer.single('profileImg'),midle.sendUploadToGCS,User.edit)

module.exports = router;
