const {model} = require("mongoose");

const {positionSchema} = require("../schemas/positionSchema");

const PositionModel = model("postion", positionSchema);

module.exports = {PositionModel};