
module.exports.Logout= async (req, res)=> {
    res.clearCookie("token", { // responding to the client with an instruction to delete the cookie named token
        httpOnly: true,
        secure: true,
        sameSite: "None"
    });
    res.json({message: "Logged ou successfully", success: true});
}