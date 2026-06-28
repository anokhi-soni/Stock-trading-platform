require("dotenv").config();
const jwt = require("jsonwebtoken");

module.exports.createToken = (id)=>{ // This token decides whether a user is authenticated or not
    return jwt.sign(
        {id}, // id of the user (mongodb id) passed
        process.env.JWT_TOKEN_KEY, 
        {expiresIn: 3*24*60*60}
    ); // the token will get expired within 3 days
}