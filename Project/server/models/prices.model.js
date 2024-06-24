const mongoose = require("mongoose");
const PricesSchema = require('../schemas/prices.schema');

const PricesModel = mongoose.model("Prices", PricesSchema);

module.exports = PricesModel;
