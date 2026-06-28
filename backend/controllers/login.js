const {User} = require("../models/userModel");
const Bycrypt = require("bcrypt")
const { createToken } = require("../util/secretToken");
module.exports.Login = async (req, res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user) {
            return res.json({message: `User ${username} not found`, success: false});
        }
        const hashedPassword = user.password;
        const isAuthor = await Bycrypt.compare(password, hashedPassword);

        if(!isAuthor) return res.json({message: `Password is invalid`, success: false});

        const token = createToken(user._id);
        res.cookie("token", token, {httpOnly: true, secure: true, sameSite: "None" });

        return res
        .status(201)
        .json({message: "Logged in Successfully!", success:true});
    } catch (error) {
        console.error(error);
        return res.json({
            message:"Internal server error",
            success:false
        });
    }

} 