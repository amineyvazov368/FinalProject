const mongoose = require("mongoose");
const TeamsSchema = require('../schemas/teams.schema');

const TeamsModel = mongoose.model("Teams", TeamsSchema);

module.exports = TeamsModel;