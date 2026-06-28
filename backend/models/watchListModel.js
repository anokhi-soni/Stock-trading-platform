const {model} = require("mongoose");

const {watchListSchema} = require("../schemas/watchListSchema");

const watchListModel = model("watchlist", watchListSchema);

module.exports = {watchListModel};