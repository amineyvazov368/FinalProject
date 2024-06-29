const mongoose = require("mongoose");
const SaysSchema = require('../schemas/says.schema');

const SaysModel = mongoose.model("Says", SaysSchema);

module.exports = SaysModel;