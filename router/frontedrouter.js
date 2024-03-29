const router = require('express').Router()
const regc = require('../controllers/regcontroller')
const handlelogin = require('../helpers/logincheckfunction')
const blogc = require('../controllers/blogcontroller')
const upload = require('../helpers/multer')


router.get('/', regc.loginname)
router.post('/', regc.logincheck)
router.get('/reg', regc.registerpage)
router.post('/reg', regc.register)
router.get('/emailverify/:id', handlelogin, regc.emailsendlink)
router.get('/forgetform', handlelogin, regc.forgetform)
router.post('/forgetform', handlelogin, regc.forgetsendlink)
router.get('/forgetpasswordlink/:id', handlelogin, regc.forgetpasslink)
router.post('/forgetpasswordlink/:id', regc.forgetpasswordchange)
router.get('/logout', handlelogin, regc.logout)
router.get('/userprofiles', handlelogin, regc.userprofile)
router.get('/profile', handlelogin, regc.profileupdateform)
router.post('/profile', handlelogin, upload.single('img'), regc.profileupdate)
router.get('/usercontact/:id', handlelogin, regc.usercontact)
router.get('/yourblog', handlelogin, blogc.blogselection)
router.get('/addblog', handlelogin, blogc.blogform)
router.post('/addblog', blogc.addblog)
router.get('/deleteblog/:id', handlelogin, blogc.deleteblog)
router.get('/allblogs', handlelogin, blogc.allblog)

module.exports = router