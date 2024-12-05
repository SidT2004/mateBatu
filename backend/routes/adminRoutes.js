const express=require('express')

const addCollege=require('../controllers/adminController').addCollege
const addMeet=require('../controllers/adminController').addMeet
const getColleges=require('../controllers/adminController').getColleges
// const { getAdmins, getAdmin } = require('../controllers/adminController')
const router=express.Router()

router.post("/addCollege",addCollege)
router.post("/addMeet",addMeet)
router.get('/getClg', getColleges )


module.exports=router