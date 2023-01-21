const User = require("../model/user.model")


const getProfile=async(req,res)=>{
    let {user}=req
    
    try {
        
        let loggedUser= await User.findById(user.id).select("-password")

        if(loggedUser){
            return res.status(200).send({user:loggedUser,message:"Logged-in user"})
        }
    } catch (error) {
        return res.send(error.message)
    }
   
}

module.exports={getProfile}