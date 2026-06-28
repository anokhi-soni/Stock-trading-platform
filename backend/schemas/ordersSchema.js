const { Schema } = require("mongoose");

const ordersSchema = new Schema({
    name: String,
    price: Number,
    qty: Number,
    mode: String,
    orderedAt: {
        type: Date,
        default: Date.now // don't write Date.now() or new Date() cuz they'll execute only for once when the server starts/restarts due to which every user will get the same registeration time.
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
})

module.exports = {ordersSchema}