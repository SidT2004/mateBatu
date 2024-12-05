const express=require("express")
const { getRequests, sendRequest, acceptRequest, rejectRequest,getMeet } = require("../controllers/userController.js")
const  protectRoute  = require("../middlewares/protectRoute")

const router=express.Router()

router.get("/getRequest",protectRoute,getRequests)
router.get("/getMeet",protectRoute,getMeet)
router.post("/sendRequest/:id",protectRoute,sendRequest)
router.post("/acceptRequest/:id",protectRoute,acceptRequest)
router.post("/rejectRequest/:id",protectRoute,rejectRequest)

module.exports=router