const JWT = require("jsonwebtoken");
const { User } = require("../models/userModel");
module.exports.verifyUser = async (req, res, next)=>{
    const token = req.cookies.token;
    if(!token) {
        return res.json({message: "Token unavailable.... Please Login/Signup first", status: false}); // must write return, otherwie error: Cannot set headers after they are sent to the client
        
    }
    JWT.verify(token, process.env.JWT_TOKEN_KEY, async(err, data)=>{
        if(err) {
            const error = err;
            return res.json({message: error, status: false}); // must write return, otherwie error: Cannot set headers after they are sent to the client
        }
        else {
            const user = await User.findById(data.id);
            if(!user) res.json({message: "access token invalid... Please Login again", status: false}); 
            // res.json({msg: "Access provided successfully!", user: user, status: true});
            req.currUser = user;
            next();
        }
    })
}