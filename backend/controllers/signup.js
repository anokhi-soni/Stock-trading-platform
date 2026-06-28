const {User} = require("../models/userModel");
const {createToken} = require("../util/secretToken");

module.exports.signUp = async(req, res)=>{
    try {
        const {username, email, password} = req.body;
        
        const alreadyExists = await User.findOne({username: username})
        
        if(alreadyExists) {
            
            return res.json({message: "This username is unavailable", success:false});
        }
        const user = new User({
            username: username,
            email: email,
            password: password
        })
        
        await user.save()
       
        const token = await createToken(user._id);
        
        res.cookie("token", token, {
            httpOnly: true, // This prevents JavaScript running in the browser from reading the cookie, making it much harder for an attacker to steal the JWT through an XSS attack
            secure: true,
            sameSite: "None"
        })
        
        return res
        .status(201)
        .json({message: "Registered Successfully!", success:true})

    } catch (error) {
        console.error(error);
         return res.json({
            message:"Internal server error",
            success:false
        });
    }
}
