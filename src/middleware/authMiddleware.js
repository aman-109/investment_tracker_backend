const jwt=require("jsonwebtoken")

const User = require("../model/user.model");


const authMiddleware = async (req, res, next) => {
    let token;
    // console.log(req.headers)
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      try {
        token = req.headers.authorization.split(" ")[1];
       

        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
  
        req.user = await User.findById(decoded.id).select("-password");
        next();
      } catch (error) {
        res.status(401);
        throw new Error("Not authorized, token failed");
      }
    }
  
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
  };
  
  module.exports = { authMiddleware };