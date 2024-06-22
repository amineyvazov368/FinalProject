const mongoose = require("mongoose");
const CutsSchema = require('../schemas/cuts.schema');

const CutsModel = mongoose.model("Cuts", CutsSchema);

module.exports = CutsModel;