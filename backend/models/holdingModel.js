const {model} = require("mongoose");
const {Holdings} = require("../schemas/holdingSchema");

const HoldingModel = model("holding", Holdings);

module.exports = {HoldingModel};