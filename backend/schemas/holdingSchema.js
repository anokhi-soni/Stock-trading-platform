const {Schema} = require("mongoose");

const Holdings = new Schema({
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    day: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = {Holdings}