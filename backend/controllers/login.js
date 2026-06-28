const {User} = require("../models/userModel");
const Bycrypt = require("bcrypt")
const { createToken } = require("../util/secretToken");
module.exports.Login = async (req, res)=>{
    try {
        const {username, password} = req.body;
        const user = await User.findOne({username});
        if(!user) {
            res.json({msg: `User ${username} not found`});
        }
        const hashedPassword = user.password;
        const isAuthor = await Bycrypt.compare(password, hashedPassword);

        if(!isAuthor) return res.json({msg: `Password is invalid`});

        const token = createToken(user._id);
        res.cookie("token", token, {httpOnly: true, secure: true, sameSite: "None" });

        res
        .status(201)
        .json({message: "Logged in Successfully!", success:true});
    } catch (error) {
        console.error(error);
    }

} 