const express=require("express")

const router=express.Router()

const {signupUser}=require("../controller/signup")
const {loginUser}=require("../controller/login")
const { authMiddleware } = require("../middleware/authMiddleware")
const { getProfile } = require("../controller/getProfileController")

router
.post("/register",signupUser)
.post("/login",loginUser)
.get("/getProfile",authMiddleware,getProfile)


module.exports=router