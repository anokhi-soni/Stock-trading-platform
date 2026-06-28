const Mongoose = require("mongoose");
const Bcrypt = require("bcrypt");

const userSchema = new Mongoose.Schema({
    username:{
        type: String,
        required: [true, "Please create a username"],
        unique: true
    }, 
    email: {
        type: String,
        required: [true, "Please enter an email"]
    },
    password: {
        type: String,
        required:  [true, "Please enter a password"]
    },
    registrationDate: {
        type: Date,
        default: Date.now // don't write Date.now() or new Date() cuz they'll execute only for once when the server starts/restarts due to which every user will get the same registeration time.
    },
    balance:{
        type: Number,
        default: 500000
    }
})

userSchema.pre("save", async function(){
    if(!this.isModified("password")) return; // isModified("filedName") returns true if a field has been modified. We're applying this condition because if the user changes any of the fields other than the password, so the password shall not be hashed again! 
    this.password = await Bcrypt.hash(this.password, 12); // hashing the password and that too for 12 rounds so that if the hacker trys to read the patterns of hashed password, it needs billons of trials and strong computaion
})

module.exports = {userSchema};